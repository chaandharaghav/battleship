/* eslint-disable operator-linebreak */
import announce from './announce';
import { attack, changeActivePlayer, findCurrentPlayer } from './game';
import buildBoard from './loadboard';

function removeCurrentBoard() {
  document.querySelector('#playArea').innerHTML = '';
}

function addBoardEvents() {
  const body = document.querySelector('body');

  body.addEventListener('click', (e) => {
    if (
      e.target.nodeName === 'DIV' &&
      e.target.parentElement.classList.contains('board')
    ) {
      attack([
        parseInt(e.target.dataset.row, 10),
        parseInt(e.target.dataset.col, 10),
      ]);
      changeActivePlayer();

      setTimeout(() => {
        announce(`${findCurrentPlayer().name}'s turn`);
        removeCurrentBoard();
        buildBoard(findCurrentPlayer());
      }, 800);
    }
  });
}

export { addBoardEvents, removeCurrentBoard };
