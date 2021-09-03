// importing scripts
import { startGame } from './game';

// importing styles
import '../styles/player-names.css';
import { addBoardEvents, removeCurrentBoard } from './gameEvents';

function addFormControls() {
  const form = document.querySelector('#name-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    removeCurrentBoard();
    startGame(e.target[0].value, e.target[1].value);
    addBoardEvents();
  });
}

export default addFormControls;
