import '../styles/announce.css';

function announce(sentence) {
  const popup = document.createElement('div');
  popup.id = 'popup';

  const sentenceDiv = document.createElement('div');
  sentenceDiv.id = 'sentence-div';
  sentenceDiv.innerText = sentence;

  popup.append(sentenceDiv);

  const body = document.querySelector('body');
  body.append(popup);

  setTimeout(() => {
    popup.remove();
  }, 1200);
}

export default announce;
