// let pinkSquareContainer = document.getElementsByClassName('draggable-container')
// let orangeSquare = document.getElementById('drop-container')

// // draggable element

// let = pinkSquare = document.getElementById('draggable-element');

// pinkSquare.addEventListener('dragstart', function(event){
// event.dataTransfer.setData('pink-square', event.target.id);
// event.dataTransfer.effectAllowed = 'move';
// event.target.style.cursor = 'move'
// })

// pinkSquare.addEventListener('drag', function(event){

// event.preventDefault()
// // console.log(event.target)
// event.target.classList.add('hide')


// })
// orangeSquare.addEventListener('dragover', function(event){
//   event.preventDefault()
// })

// orangeSquare.addEventListener('drop', function(event){
// event.preventDefault();
// let id = event.dataTransfer.getData('pink-square')
// console.log('draggable-element')
// let pink = document.getElementById(id)
// event.target.appendChild(pink)

// })

// pinkSquareContainer.addEventListener('dragover', function(event){
//   event.preventDefault()
// })

// pinkSquareContainer.addEventListener('drop', function(event){
//   event.preventDefault();
//   let id = event.dataTransfer.getData('pink-square')
//   console.log('draggable-element')
//   let pink = document.getElementById(id)
//  event.target.appendChild(pink)
  
//   })

let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
function pangrams(s) {
  let lowercase = s.toLowerCase().split('').join('')
  
  for (let i = 0; i <= alphabet.length; i++ ) {
    if (lowercase.indexOf(alphabet[i]) === -1){

      return 'not pangram'
    }
  }
  return 'pangram'
}
