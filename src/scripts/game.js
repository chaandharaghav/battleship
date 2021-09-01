import buildBoard from './loadboard';
import Player from './player';

function makeNextMove(currentPlayer) {
  buildBoard(currentPlayer);
}

function playGame() {
  const player = new Player('Adam');
  const computer = new Player('Computer');

  player.board.addShip(3, [0, 0], 'column');
  player.board.addShip(4, [3, 3], 'row');
  player.board.receiveAttack([3, 2]);
  computer.board.addShip(3, [0, 0], 'column');

  let turn = 'player';
  if (turn === 'player') {
    makeNextMove(player);
    turn = 'computer';
  } else {
    makeNextMove(computer);
    turn = 'player';
  }
}

export default playGame;
