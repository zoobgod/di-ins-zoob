function makeAllCaps(words) {
    return new Promise((resolve, reject) => {
      const allStrings = words.every(word => typeof word === 'string')
      if (allStrings) {
        const uppercasedWords = words.map(word => word.toUpperCase())
        resolve(uppercasedWords);
      } else {
        reject('The array contains non-string elements.');
      }
    })
  }
  
  function sortWords(words) {
    return new Promise((resolve, reject) => {
      if (words.length > 4) {
        const sortedWords = words.sort()
        resolve(sortedWords)
      } else {
        reject('The array does not have more than 4 elements.')
      }
    })
  }

  makeAllCaps([1, "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

      makeAllCaps(["apple", "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

      makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//SECOND DAILY CHALLENGE
const morseJsonString = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`
//first function()
function toJs(morseJsonString) {
    return new Promise((resolve, reject) => {
      const morseJsObject = JSON.parse(morseJsonString)
      if (Object.keys(morseJsObject).length === 0) {
        reject('The Morse JavaScript object is empty.')
      } else {
        resolve(morseJsObject)
      }
    })
  }


  
//second function()
  function toMorse(morseJS) {
    return new Promise((resolve, reject) => {
      const morseChars = Object.keys(morseJS)
      const morseValues = Object.values(morseJS)
      const regex = new RegExp(`[^${morseChars.join('')}\s]`, 'gi')
      const input = prompt('Enter a word or sentence to translate to Morse code:')
      if (regex.test(input)) {
        reject('The input contains characters that are not in the Morse JavaScript object.')
      } else {
        const words = input.toLowerCase().split(' ')
        const morseArray = words.map(word => {
          const chars = word.split('')
          const morseWord = chars.map(char => morseValues[morseChars.indexOf(char)]).join(' ')
          return morseWord
        });
        resolve(morseArray)
      }
    })
  }
 
//third function()
  function joinWords(morseTranslation) {
    const morseString = morseTranslation.join('\n')
    const morseDiv = document.createElement('div')
    morseDiv.textContent = morseString
    document.body.appendChild(morseDiv)
  }
  // calling all functions
  toJs(morseJsonString)
  .then(morseJS => toMorse(morseJS))
  .then(morseTranslation => joinWords(morseTranslation))
  .catch(error => console.error(error))

