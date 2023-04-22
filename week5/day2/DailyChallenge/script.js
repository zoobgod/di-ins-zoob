const form = document.getElementById('libform');
const nounInput = document.getElementById('noun');
const adjInput = document.getElementById('adjective');
const personInput = document.getElementById('person');
const verbInput = document.getElementById('verb');
const placeInput = document.getElementById('place');
const storyOutput = document.getElementById('story');




const stories = [
  'Once upon a time, there was a <adj> <noun> named <person> who loved to <verb> at <place>.',
  'In a faraway land, there was a <noun> who had <adj> hair and loved to <verb> with <person> at <place>.',
  '<person> woke up feeling <adj> and decided to <verb> to <place> where they met a <noun>.',
  'There was a <adj> <noun> living in <place> who would always <verb> with <person>.',
  'A <noun> was lost in <place> until they met <person> who helped them <verb> their way home.'
];


function createStory() {
  let story = stories[Math.floor(Math.random() * stories.length)]; // select a random story
  story = story.replace('<noun>', nounInput.value);
  story = story.replace('<adj>', adjInput.value);
  story = story.replace('<person>', personInput.value);
  story = story.replace('<verb>', verbInput.value);
  story = story.replace('<place>', placeInput.value);
  storyOutput.textContent = story;
}


form.addEventListener('submit', function(event) {
  event.preventDefault();
  if (nounInput.value && adjInput.value && personInput.value && verbInput.value && placeInput.value) {
    createStory();
  } else {
    console.log('Please fill in all the fields.');
  }
});


const shuffleButton = document.getElementById('shuffle-button');
shuffleButton.addEventListener('click', function() {
  createStory();
});


