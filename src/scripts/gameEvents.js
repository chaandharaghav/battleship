import { attack } from './game';

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
    }
  });
}

function removeCurrentBoard() {
  document.querySelector('#playArea').innerHTML = '';
}

export { addBoardEvents, removeCurrentBoard };
