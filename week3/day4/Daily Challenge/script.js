const sentence = prompt("Your Thoughts about the last dinner you had? Try to use the words 'not' and 'bad'")
const wordNot = (sentence.indexOf("not"))
const wordBad = (sentence.indexOf("bad"))

if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {
  const newSentence = sentence.slice(0, wordNot) + "good" + sentence.slice(wordBad + 3);
  console.log(newSentence);
} else if (wordNot !== -1 && wordBad !== -1) {
  console.log(sentence);
} else {
  console.log(sentence);
}