const lettersInput = document.getElementById('letters-input');

lettersInput.addEventListener('keyup', (event) => {
  const inputText = event.target.value;
  const lettersOnly = inputText.replace(/[^a-zA-Z]/g, '');
  event.target.value = lettersOnly;
});