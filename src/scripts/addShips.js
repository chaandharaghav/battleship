import '../styles/place-ships-board.css';

function isShipPresent(player, row, col) {
  return player.board.board[row][col] > 0;
}

function buildShipBoard(player) {
  const playArea = document.querySelector('#playArea');

  const boardDiv = document.createElement('div');
  boardDiv.classList.add('place-ships-board');

  for (let row = 0; row < 10; row += 1) {
    for (let col = 0; col < 10; col += 1) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.dataset.row = row;
      cell.dataset.col = col;

      if (isShipPresent(player, row, col)) {
        cell.classList.add('ship-present');
      }

      boardDiv.append(cell);
    }
  }

  playArea.append(boardDiv);
}

export default buildShipBoard;
