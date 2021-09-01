/* eslint-disable import/no-extraneous-dependencies */
import { test, expect } from '@jest/globals';
import Player from '../scripts/player';

test('attacks a random tile correctly', () => {
  const computer = new Player('computer');
  computer.attackRandom();
  expect(computer.attacks).not.toBe([]);
});

test("works correctly if player doesn't attack", () => {
  const computer = new Player('computer');
  expect(computer.attacks).toStrictEqual([]);
});
