import buildBoard from './loadboard';
import Player from './player';

const players = [];

function initializePlayers(p1Name, p2Name) {
  const player = new Player(p1Name);
  const computer = new Player(p2Name);

  player.board.addShip(3, [0, 0], 'column');
  player.board.addShip(4, [3, 3], 'row');
  player.board.receiveAttack([3, 2]);
  player.isTheirTurn = true;

  computer.board.addShip(3, [0, 0], 'column');
  computer.board.receiveAttack([0, 0]);

  players.push(player, computer);
}

function findCurrentPlayer() {
  return players.find((player) => player.isTheirTurn === true);
}

function changeActivePlayer() {
  const currentPlayerIndex = players.indexOf(
    players.find((player) => player.isTheirTurn === true),
  );

  if (currentPlayerIndex === 0) {
    buildBoard(players[1]);
    players[1].isTheirTurn = true;
    players[0].isTheirTurn = false;
  } else {
    buildBoard(players[0]);
    players[0].isTheirTurn = true;
    players[1].isTheirTurn = false;
  }
}

function startGame(p1Name, p2Name) {
  initializePlayers(p1Name, p2Name);

  buildBoard(findCurrentPlayer());
}

function updateBoard() {
  const playArea = document.querySelector('#playArea');
  playArea.innerHTML = '';

  buildBoard(findCurrentPlayer());
}

function attack(position) {
  const player = findCurrentPlayer();
  player.board.receiveAttack(position);

  updateBoard();

  if (player.board.allShipsSunk()) {
    console.log(`${player.name} wins`);
  }
}

export { startGame, findCurrentPlayer, changeActivePlayer, attack };
