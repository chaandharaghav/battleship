import buildShipBoard from './addShips';
import { addBoardEvents, removeCurrentBoard } from './gameEvents';
import {
  changeActivePlayer,
  findCurrentPlayer,
  findCurrentPlayerIndex,
} from './game';
import announce from './announce';
import buildBoard from './loadboard';

const lengths = [4, 3, 3, 2, 1];
let index = 0;

function addShipsEvents() {
  const body = document.querySelector('body');
  body.addEventListener('click', (e) => {
    if (
      e.target.nodeName === 'DIV' &&
      e.target.parentElement.classList.contains('place-ships-board')
    ) {
      findCurrentPlayer().board.addShip(
        lengths[index],
        [
          parseInt(e.target.dataset.row, 10),
          parseInt(e.target.dataset.col, 10),
        ],
        'row',
      );
      removeCurrentBoard();
      buildShipBoard(findCurrentPlayer());

      index += 1;
      if (index === lengths.length) {
        changeActivePlayer();
        removeCurrentBoard();
        announce(`${findCurrentPlayer().name} place your ships`);
        buildShipBoard(findCurrentPlayer());
        index = 0;

        if (findCurrentPlayerIndex() === 0) {
          announce(`${findCurrentPlayer().name}'s turn`);
          removeCurrentBoard();
          buildBoard(findCurrentPlayer());
          addBoardEvents();
        }
      }
    }
  });
}

export default addShipsEvents;
