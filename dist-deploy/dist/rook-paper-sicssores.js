/* ---------------- SCORE ---------------- */
export const score = JSON.parse(localStorage.getItem('score')) || {
    win: 0,
    losers: 0,
    ties: 0,
};
/* ---------------- SOUNDS ---------------- */
const winSound = new Audio('./Music/winer.mp3');
const loseSound = new Audio('./Music/loser.mp3');
const tieSound = new Audio('./Music/tie.mp3');
/* ---------------- STATE ---------------- */
let isAutoPlaying = false;
let intervalId;
/* ---------------- COMPUTER MOVE ---------------- */
export function pickUpComputerMove() {
    const randomNumber = Math.random();
    if (randomNumber < 1 / 3)
        return 'Rock';
    if (randomNumber < 2 / 3)
        return 'paper';
    return 'scissors';
}
/* ---------------- DETERMINE RESULT ---------------- */
export function determineResult(playerMove, computerMove) {
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
export function updateScore(score, result) {
    if (result === 'win')
        score.win++;
    if (result === 'lose')
        score.losers++;
    if (result === 'tie')
        score.ties++;
    localStorage.setItem('score', JSON.stringify(score));
}
/* ---------------- UPDATE SCORE UI ---------------- */
export function updateScoreElement() {
    const scoreEl = document.querySelector('.js-score');
    if (scoreEl)
        scoreEl.innerHTML = `Wins: ${score.win}, Losses: ${score.losers}, Ties: ${score.ties}`;
}
/* ---------------- PLAY GAME ---------------- */
export function playGame(playerMove, isClick = true) {
    const computerMove = pickUpComputerMove();
    const resultType = determineResult(playerMove, computerMove);
    // ---------------- UPDATE SCORE & PLAY SOUND ----------------
    updateScore(score, resultType);
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
    const resultEl = document.querySelector('.js-result');
    const moveEl = document.querySelector('.js-Move');
    if (resultEl)
        resultEl.innerHTML =
            resultType === 'win' ? 'You win.' :
                resultType === 'lose' ? 'You lose.' : 'You tie.';
    if (moveEl)
        moveEl.innerHTML = `
    You
    <img src="./images/${playerMove}-emoji.png" class="move-icon">
    <img src="./images/${computerMove}-emoji.png" class="move-icon">
    Computer
  `;
}
/* ---------------- HANDLE PLAYER CLICK ---------------- */
export function handlePlayerMove(move) {
    console.log('handlePlayerMove called:', move);
    // قطع کردن AutoPlay اگر فعال بود
    if (isAutoPlaying) {
        clearInterval(intervalId);
        isAutoPlaying = false;
    }
    playGame(move, true);
    const autoPlayBtn = document.querySelector('.auto-play-button');
    if (autoPlayBtn)
        autoPlayBtn.innerHTML = 'Manual Play';
}
/* ---------------- TOGGLE AUTOPLAY ---------------- */
export function toggleAutoPlay() {
    const autoPlayBtn = document.querySelector('.auto-play-button');
    if (!autoPlayBtn)
        return;
    console.log('toggleAutoPlay called. isAutoPlaying:', isAutoPlaying);
    if (!isAutoPlaying) {
        intervalId = window.setInterval(() => {
            const move = pickUpComputerMove();
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
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded');
    const rockBtn = document.querySelector('.js-Rook-button');
    const paperBtn = document.querySelector('.js-papeer-button');
    const scissorsBtn = document.querySelector('.js-scissors-button');
    const autoPlayBtn = document.querySelector('.auto-play-button');
    const resetBtn = document.querySelector('.reset-score-button');
    if (rockBtn)
        rockBtn.addEventListener('click', () => handlePlayerMove('Rock'));
    if (paperBtn)
        paperBtn.addEventListener('click', () => handlePlayerMove('paper'));
    if (scissorsBtn)
        scissorsBtn.addEventListener('click', () => handlePlayerMove('scissors'));
    if (autoPlayBtn)
        autoPlayBtn.addEventListener('click', toggleAutoPlay);
    if (resetBtn)
        resetBtn.addEventListener('click', () => {
            score.win = 0;
            score.losers = 0;
            score.ties = 0;
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
    window.addEventListener('keydown', (event) => {
        const key = event.key.toLowerCase();
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
