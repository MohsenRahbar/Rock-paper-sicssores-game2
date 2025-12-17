"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.score = void 0;
exports.pickUpComputerMove = pickUpComputerMove;
exports.determineResult = determineResult;
exports.updateScore = updateScore;
exports.updateScoreElement = updateScoreElement;
exports.playGame = playGame;
exports.handlePlayerMove = handlePlayerMove;
exports.toggleAutoPlay = toggleAutoPlay;
/* ---------------- SCORE ---------------- */
exports.score = JSON.parse(localStorage.getItem('score')) || {
    win: 0,
    losers: 0,
    ties: 0,
};
/* ---------------- SOUNDS ---------------- */
var winSound = new Audio('./Music/winer.mp3');
var loseSound = new Audio('./Music/loser.mp3');
var tieSound = new Audio('./Music/tie.mp3');
/* ---------------- STATE ---------------- */
var isAutoPlaying = false;
var intervalId;
/* ---------------- COMPUTER MOVE ---------------- */
function pickUpComputerMove() {
    var randomNumber = Math.random();
    if (randomNumber < 1 / 3)
        return 'Rock';
    if (randomNumber < 2 / 3)
        return 'paper';
    return 'scissors';
}
/* ---------------- DETERMINE RESULT ---------------- */
function determineResult(playerMove, computerMove) {
    if (playerMove === computerMove)
        return 'tie';
    if ((playerMove === 'Rock' && computerMove === 'scissors') ||
        (playerMove === 'paper' && computerMove === 'Rock') ||
        (playerMove === 'scissors' && computerMove === 'paper')) {
        return 'win';
    }
    return 'lose';
}
/* ---------------- UPDATE SCORE ---------------- */
function updateScore(score, result) {
    if (result === 'win')
        score.win++;
    if (result === 'lose')
        score.losers++;
    if (result === 'tie')
        score.ties++;
    localStorage.setItem('score', JSON.stringify(score));
}
/* ---------------- UPDATE SCORE UI ---------------- */
function updateScoreElement() {
    var scoreEl = document.querySelector('.js-score');
    if (scoreEl)
        scoreEl.innerHTML = "Wins: ".concat(exports.score.win, ", Losses: ").concat(exports.score.losers, ", Ties: ").concat(exports.score.ties);
}
/* ---------------- PLAY GAME ---------------- */
function playGame(playerMove, isClick) {
    if (isClick === void 0) { isClick = true; }
    var computerMove = pickUpComputerMove();
    var resultType = determineResult(playerMove, computerMove);
    // ---------------- UPDATE SCORE & PLAY SOUND ----------------
    updateScore(exports.score, resultType);
    if (isClick) {
        if (resultType === 'win')
            winSound.play();
        if (resultType === 'lose')
            loseSound.play();
        if (resultType === 'tie')
            tieSound.play();
    }
    updateScoreElement();
    // ---------------- UPDATE UI ----------------
    var resultEl = document.querySelector('.js-result');
    var moveEl = document.querySelector('.js-Move');
    if (resultEl)
        resultEl.innerHTML =
            resultType === 'win' ? 'You win.' :
                resultType === 'lose' ? 'You lose.' : 'You tie.';
    if (moveEl)
        moveEl.innerHTML = "\n    You\n    <img src=\"./images/".concat(playerMove, "-emoji.png\" class=\"move-icon\">\n    <img src=\"./images/").concat(computerMove, "-emoji.png\" class=\"move-icon\">\n    Computer\n  ");
}
/* ---------------- HANDLE PLAYER CLICK ---------------- */
function handlePlayerMove(move) {
    console.log('handlePlayerMove called:', move);
    // قطع کردن AutoPlay اگر فعال بود
    if (isAutoPlaying) {
        clearInterval(intervalId);
        isAutoPlaying = false;
    }
    playGame(move, true);
    var autoPlayBtn = document.querySelector('.auto-play-button');
    if (autoPlayBtn)
        autoPlayBtn.innerHTML = 'Manual Play';
}
/* ---------------- TOGGLE AUTOPLAY ---------------- */
function toggleAutoPlay() {
    var autoPlayBtn = document.querySelector('.auto-play-button');
    if (!autoPlayBtn)
        return;
    console.log('toggleAutoPlay called. isAutoPlaying:', isAutoPlaying);
    if (!isAutoPlaying) {
        intervalId = window.setInterval(function () {
            var move = pickUpComputerMove();
            playGame(move, false);
        }, 1000);
        isAutoPlaying = true;
        autoPlayBtn.innerHTML = 'Stop';
    }
    else {
        clearInterval(intervalId);
        isAutoPlaying = false;
        autoPlayBtn.innerHTML = 'Auto Play';
    }
}
/* ---------------- EVENT LISTENERS AFTER DOM CONTENT LOADED ---------------- */
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded');
    var rockBtn = document.querySelector('.js-Rook-button');
    var paperBtn = document.querySelector('.js-papeer-button');
    var scissorsBtn = document.querySelector('.js-scissors-button');
    var autoPlayBtn = document.querySelector('.auto-play-button');
    var resetBtn = document.querySelector('.reset-score-button');
    if (rockBtn)
        rockBtn.addEventListener('click', function () { return handlePlayerMove('Rock'); });
    if (paperBtn)
        paperBtn.addEventListener('click', function () { return handlePlayerMove('paper'); });
    if (scissorsBtn)
        scissorsBtn.addEventListener('click', function () { return handlePlayerMove('scissors'); });
    if (autoPlayBtn)
        autoPlayBtn.addEventListener('click', toggleAutoPlay);
    if (resetBtn)
        resetBtn.addEventListener('click', function () {
            exports.score.win = 0;
            exports.score.losers = 0;
            exports.score.ties = 0;
            localStorage.removeItem('score');
            updateScoreElement();
            if (isAutoPlaying) {
                clearInterval(intervalId);
                isAutoPlaying = false;
            }
            if (autoPlayBtn)
                autoPlayBtn.innerHTML = 'Auto Play';
        });
    // ---------------- KEYBOARD EVENTS ----------------
    window.addEventListener('keydown', function (event) {
        var key = event.key.toLowerCase();
        console.log('Key pressed:', key);
        if (key === 'r')
            handlePlayerMove('Rock');
        if (key === 'p')
            handlePlayerMove('paper');
        if (key === 's')
            handlePlayerMove('scissors');
        if (key === 'a')
            toggleAutoPlay();
    });
});
