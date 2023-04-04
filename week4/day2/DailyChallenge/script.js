function wordFrame () {
  let inputSequence = prompt("Enter your words separated by commas");
  let words = inputSequence.split(",");
  let maxLength = 0;

  for(i = 0; i < words.length; i++)
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
    let numRows = maxLength + 4

    let topRow = "";
    for (let i = 0; i < maxLength +4; i++) {
      topRow += "*"; 
    }
    console.log(topRow)

    
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      let numSpaces = maxLength - word.length;
      let spaces = "";
      for (let j = 0; j < numSpaces; j++) {
        spaces += " ";
      }
      console.log(`* ${word}${spaces} *`);
    }
  

    let bottomRow = "";
    for (let i = 0; i < maxLength + 4; i++) {
      bottomRow += "*"; 
    }
    console.log(bottomRow)
}
wordFrame()