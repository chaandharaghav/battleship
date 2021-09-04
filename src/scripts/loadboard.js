/* eslint-disable operator-linebreak */
/* eslint-disable no-param-reassign */

// importing styles
import '../styles/board-styles.css';

const playArea = document.querySelector('#playArea');

function setInnerText(cell, player, row, col) {
  switch (player.board.board[row][col]) {
    case 'x':
      cell.innerText = 'x';
      cell.classList.add('hit');
      break;
    case -1:
      cell.innerText = 'x';
      cell.classList.add('missed');
      break;
    default:
      cell.innerText = '-';
      cell.classList.add('notShot');
      break;
  }
}

function buildBoard(player) {
  const boardDiv = document.createElement('div');
  boardDiv.classList.add('board');

  for (let row = 0; row < 10; row += 1) {
    for (let col = 0; col < 10; col += 1) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.dataset.row = row;
      cell.dataset.col = col;

      setInnerText(cell, player, row, col);

      boardDiv.append(cell);
    }
  }

  playArea.append(boardDiv);
}

export default buildBoard;
