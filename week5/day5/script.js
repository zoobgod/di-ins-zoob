
// let said = prompt("Input any sentence")
// function inputWord(input) {
 

// }
// // // console.log('meme')

// function reverseWord(str) {
//   let ret = '';
//   for(let i = str.length -1; i >= 0; i--) {
//     ret = ret + str[i]
//   }
//   return ret
// }

// function reverseAll(sentence){
//   let arr = sentence.split(' ');
//   // console.log(arr);
//   for(index in arr){
//     const word = arr[index];
//     // console.log(word);
//     // const reverse = reverseWord(word);
//     let ret = "";
//     for(let i = word.length - 1; i >= 0; i--){
//       ret = ret + word[i]
//     }
//     // console.log(reverse);
//     arr[index] = ret
//   }
//   return arr.join(' ');
// }

// const ret = reverseAll('word in a given String')
// console.log(ret);

// console.log('before')
// setTimeout(function(){
//   console.log('hello');
// }, 3 * 1000)
// console.log('after')




// function setTime(){
//   setTimeout(function(){
//     console.log('hello')

//   }, 3 * 1000)
// }


let id;
let i=0
function start() {
const box = document.getElementById('box')

id = setInterval(function(){
  if (i === 351){
    stop()
  }
  box.style.left = i + 'px';
  box.style.top = i + 'px';
  i++

}, 5)

}

function stop(){
  clearInterval(id)
}



// const reverse = reverseWord('word')
// console.log(reverse)