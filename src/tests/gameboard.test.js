/* eslint-disable import/no-extraneous-dependencies */
import { test, expect } from '@jest/globals';
import GameBoard from '../scripts/gameboard';

import Ship from '../scripts/ship';

test.skip('ship placed successfully', () => {
  const gameboard = new GameBoard();
  gameboard.addShip(2, [0, 0], 'row');
  expect(gameboard.allShipsSunk()).not.toBeTruthy();
});

test.skip('registers missed shots correctly', () => {
  const gameboard = new GameBoard();
  gameboard.addShip(3, [0, 0], 'row');
  expect(gameboard.receiveAttack([1, 0])).toBe(1);
  expect(gameboard.receiveAttack([1, 1])).toBe(2);
});

test.skip('receives attack correctly', () => {
  const gameboard = new GameBoard();
  gameboard.addShip(3, [0, 0], 'column');
  expect(gameboard.receiveAttack([0, 0])).toStrictEqual(
    new Ship(3, ['hit', null, null]),
  );
});

test.skip('receives attack correctly 2', () => {
  const gameboard = new GameBoard();
  gameboard.addShip(3, [0, 0], 'column');
  expect(gameboard.receiveAttack([1, 0])).toStrictEqual(
    new Ship(3, [null, 'hit', null]),
  );
});

test.skip('registers attack correctly', () => {
  const gameboard = new GameBoard();
  gameboard.addShip(3, [0, 0], 'column');
  gameboard.receiveAttack([0, 0]);
  gameboard.receiveAttack([1, 0]);
  expect(gameboard.receiveAttack([2, 0])).toStrictEqual(
    new Ship(3, ['hit', 'hit', 'hit'], true),
  );
});
