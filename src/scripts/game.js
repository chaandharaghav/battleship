import { buildShipBoard } from './addShips';
import announce from './announce';
import buildBoard from './loadboard';
import Player from './player';

const players = [];

function initializePlayers(p1Name, p2Name) {
  const player = new Player(p1Name);
  const computer = new Player(p2Name);

  player.isTheirTurn = true;

  players.push(player, computer);
}

function findCurrentPlayer() {
  return players.find((player) => player.isTheirTurn === true);
}

function findCurrentPlayerIndex() {
  return players.indexOf(players.find((player) => player.isTheirTurn === true));
}

function changeActivePlayer() {
  const currentPlayerIndex = findCurrentPlayerIndex();

  if (currentPlayerIndex === 0) {
    players[1].isTheirTurn = true;
    players[0].isTheirTurn = false;
  } else {
    players[0].isTheirTurn = true;
    players[1].isTheirTurn = false;
  }
}

function startGame(p1Name, p2Name) {
  initializePlayers(p1Name, p2Name);

  buildShipBoard(findCurrentPlayer());
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
    announce(`${player.name} wins`);
  }
}

export {
  startGame,
  findCurrentPlayer,
  changeActivePlayer,
  findCurrentPlayerIndex,
  attack,
};
