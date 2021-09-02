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
    shipObj.position = position;
    shipObj.direction = direction;

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

  receiveAttack(hitPosition) {
    const row = hitPosition[0];
    const col = hitPosition[1];

    if (this.board[row][col] !== 0) {
      return this.registerAttack(hitPosition, row, col);
    }
    // if ship is not hit, add to missed shots
    this.board[row][col] = -1;
    return this.missedShots.push(hitPosition);
  }

  registerAttack(hitPosition, row, col) {
    const shipObject = this.ships.find(
      (shipObj) => shipObj.id === this.board[row][col],
    );
    const { direction, position } = shipObject;

    if (direction === 'column') {
      shipObject.ship.hit(hitPosition[0] - position[0] + 1);
    } else {
      shipObject.ship.hit(hitPosition[1] - position[1] + 1);
    }

    // checking if the skip is sunk
    if (shipObject.ship.isSunk()) {
      shipObject.ship.sunk = true;
    }

    // x marks the positions hit
    this.board[row][col] = 'x';

    return shipObject.ship;
  }

  allShipsSunk() {
    return this.ships.every((ship) => ship.ship.isSunk() === true);
  }
}

export default GameBoard;
