// importing styles
import '../styles/player-names.css';

function addFormControls() {
  const form = document.querySelector('#name-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Submitted');
  });
}

export default addFormControls;
