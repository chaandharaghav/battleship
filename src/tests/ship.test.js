/* eslint-disable import/no-extraneous-dependencies */
import { test, expect } from '@jest/globals';
import Ship from '../scripts/ship';

test('isSunk function works correctly', () => {
  const ship = new Ship(4, ['hit', 'hit', 'hit', 'hit'], false);
  expect(ship.isSunk()).toBeTruthy();
});

test('isSunk function works correctly 2', () => {
  const ship = new Ship(4, ['hit', 'hit', null, 'hit'], false);
  expect(ship.isSunk()).toBeFalsy();
});

test('hit function works correctly', () => {
  const ship = new Ship(4, ['hit', 'hit', 'hit', null], false);
  ship.hit(4);
  expect(ship.isSunk).toBeTruthy();
});
