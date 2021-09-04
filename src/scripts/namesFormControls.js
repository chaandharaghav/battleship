// importing scripts
import { startGame } from './game';
import addShipsEvents from './addShipsEvents';
import announce from './announce';

// importing styles
import '../styles/player-names.css';
import { removeCurrentBoard } from './gameEvents';

function addFormControls() {
  const form = document.querySelector('#name-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    removeCurrentBoard();
    startGame(e.target[0].value, e.target[1].value);
    announce(`${e.target[0].value} place your ships`);
    addShipsEvents();
  });
}

export default addFormControls;
