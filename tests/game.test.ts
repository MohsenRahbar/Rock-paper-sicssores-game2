/**
 * @jest-environment jsdom
 */

import { pickUpComputerMove, playGame, updateScoreElement, handlePlayerMove, toggleAutoPlay } from '../rook-paper-sicssores';

beforeEach(() => {
  // ریست کردن localStorage و DOM قبل از هر تست
  localStorage.clear();
  document.body.innerHTML = `
    <p class="js-result"></p>
    <p class="js-Move"></p>
    <p class="js-score"></p>
    <button class="js-Rook-button"></button>
    <button class="js-papeer-button"></button>
    <button class="js-scissors-button"></button>
    <button class="reset-score-button"></button>
    <button class="auto-play-button"></button>
  `;
});

describe('Rock Paper Scissors Game', () => {
  test('pickUpComputerMove returns a valid move', () => {
    const moves = ['Rock', 'paper', 'scissors'];
    for (let i = 0; i < 50; i++) {
      const move = pickUpComputerMove();
      expect(moves).toContain(move);
    }
  });

  test('playGame updates result and moves in the DOM', () => {
    playGame('Rock', false);
    const resultEl = document.querySelector('.js-result') as HTMLElement;
    const moveEl = document.querySelector('.js-Move') as HTMLElement;

    expect(resultEl.innerHTML.length).toBeGreaterThan(0);
    expect(moveEl.innerHTML).toContain('You');
    expect(moveEl.innerHTML).toContain('Computer');
  });

  test('updateScoreElement updates score in the DOM', () => {
    const scoreEl = document.querySelector('.js-score') as HTMLElement;
    updateScoreElement();
    expect(scoreEl.innerHTML).toContain('Wins');
    expect(scoreEl.innerHTML).toContain('Losses');
    expect(scoreEl.innerHTML).toContain('Ties');
  });

  test('handlePlayerMove plays game and sets auto play button to Manual Play', () => {
    const autoBtn = document.querySelector('.auto-play-button') as HTMLElement;
    autoBtn.innerHTML = 'Auto Play';
    handlePlayerMove('paper');
    expect(autoBtn.innerHTML).toBe('Manual Play');
  });

  test('toggleAutoPlay starts and stops auto play', () => {
    const autoBtn = document.querySelector('.auto-play-button') as HTMLElement;

    toggleAutoPlay();
    expect(autoBtn.innerHTML).toBe('Stop');
    expect(setInterval).toBeDefined();

    toggleAutoPlay();
    expect(autoBtn.innerHTML).toBe('Auto Play');
  });
});
