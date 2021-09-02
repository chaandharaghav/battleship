function addBoardEvents() {
  const board = document.querySelector('.board');

  board.addEventListener('click', (e) => {
    if (e.target.nodeName === 'DIV') {
      console.log([e.target.dataset.row, e.target.dataset.col]);
    }
  });
}

function removeCurrentBoard() {
  document.querySelector('#playArea').innerHTML = '';
}

export { addBoardEvents, removeCurrentBoard };
