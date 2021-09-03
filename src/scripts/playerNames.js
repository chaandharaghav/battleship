function createNameForm() {
  const form = document.createElement('form');
  form.id = 'name-form';

  const p1NameInput = document.createElement('input');
  p1NameInput.id = 'p1Name';
  p1NameInput.type = 'text';
  p1NameInput.required = 'true';

  const p1Label = document.createElement('label');
  p1Label.for = p1NameInput.id;
  p1Label.innerText = 'Player 1 name: ';

  const p1FormGroup = document.createElement('div');
  p1FormGroup.classList.add('form-group');
  p1FormGroup.append(p1Label, p1NameInput);

  const p2NameInput = document.createElement('input');
  p2NameInput.type = 'text';
  p2NameInput.required = 'true';

  const p2Label = document.createElement('label');
  p2Label.for = p2NameInput.id;
  p2Label.innerText = 'Player 2 name: ';

  const p2FormGroup = document.createElement('div');
  p2FormGroup.classList.add('form-group');
  p2FormGroup.append(p2Label, p2NameInput);

  const submitBtn = document.createElement('button');
  submitBtn.id = 'submitBtn';
  submitBtn.innerText = 'Start Game';

  const formDiv = document.createElement('div');
  formDiv.id = 'form-div';

  form.append(p1FormGroup, p2FormGroup, submitBtn);
  formDiv.append(form);

  return formDiv;
}

function takeName() {
  const formHeading = document.createElement('h2');
  formHeading.innerText = 'Enter game details';

  const form = createNameForm();

  const formSection = document.createElement('section');
  formSection.id = 'form-section';

  formSection.append(formHeading, form);

  const playArea = document.querySelector('#playArea');
  playArea.append(formSection);
}

export default takeName;
