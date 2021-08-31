import Ship from './ship';

class GameBoard {
  constructor() {
    this.ships = [];
    this.board = new Array(10).fill().map(() => new Array(10).fill(0));
    this.missedShots = [];
  }

  addShip(length, position, direction) {
    const newShip = new Ship(length);

    const shipObj = {};
    shipObj.id = this.ships.length + 1;
    shipObj.ship = newShip;

    this.ships.push(shipObj);

    this.placeShip(shipObj.id, length, position, direction);
  }

  placeShip(id, length, position, direction) {
    const row = position[0];
    const col = position[1];

    if (direction === 'column') {
      for (let i = row; i < row + length; i += 1) {
        this.board[i][col] = id;
      }
    } else {
      for (let i = col; i < col + length; i += 1) {
        this.board[row][i] = id;
      }
    }
  }

  receiveAttack(position) {
    const row = position[0];
    const col = position[1];

    if (this.board[row][col] !== 0) {
      return this.ships.find((ship) => ship.id === this.board[row][col]).ship;
    }
    return this.missedShots.push(position);
  }

  allShipsSunk() {
    return this.ships.every((ship) => ship.ship.isSunk() === true);
  }
}

export default GameBoard;
