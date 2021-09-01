// importing styles
import '../styles/board-styles.css';

const playArea = document.querySelector('#playArea');

function setInnerText(cell, player, row, col) {
  switch (player.board.board[row][col]) {
    case 'x':
      cell.innerText = 'x';
      break;
    default:
      cell.innerText = '-';
      break;
  }

  if (
    player.board.missedShots[0][0] === row &&
    player.board.missedShots[0][1] === col
  ) {
    cell.innerText = '.';
    cell.classList.add('alreadyHit');
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
