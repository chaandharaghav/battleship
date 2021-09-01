import GameBoard from './gameboard';

function chooseRandom(array) {
  return array[Math.round(Math.random() * array.length)];
}

function getAvailablePositions() {
  const { board } = new GameBoard();
  const availablePositions = [];
  for (let row = 0; row < board.length; row += 1) {
    for (let col = 0; col < row.length; col += 1) {
      if (board[row][col] !== 'x') {
        availablePositions.push([row, col]);
      }
    }
  }

  return availablePositions;
}

class Player {
  constructor(name) {
    this.name = name;
    this.attacks = [];
  }

  attackRandom() {
    const availablePositions = getAvailablePositions();
    const chosenPosition = chooseRandom(availablePositions);
    this.attacks.push(chosenPosition);
  }
}

export default Player;
