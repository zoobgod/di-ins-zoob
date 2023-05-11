// console.log('hi')

// let x = 'yes'
// function getX() {
//   let x = 'no'
// return x

// }
// console.log(getX())


// for (var i = 0; i < 5; i++ ) {

// }

// console.log(i)

// function getEmail(name) {
//   return name+'@gmail.com'
// }

// console.log(getEmail("john"))

// function ageGap() {
//   let year = prompt('Enter the year you were born')

//   if (year < 2000 ) {
//     console.log('you live in the middle age')
//   }
//   else {
//     console.log('you are in the 21st century')
//   }

// }

// ageGap()

// let calc = prompt('give me a thing to solve') => {

// }


// let number1 = prompt("num1")
// let sign = prompt("op")
// let number2 = prompt("num2")
// function calculus() {
//   if (sign === "-") {
//     console.log(number1 - number2)
//   }
//   else if (sign === '+') {
//     console.log(number1 + number2)
//   }
//   else {
//     console.log(number1 * number2)
//   }
// }

// calculus()


// let operator = '+'

// const calc = (a,b) => {
//   let ret = (operator === '+') ? a + b :
//   (operator === '-') ? a - b :
//   (operator === '*') ? a * b :
//   (operator === "/") ? a / b : null
//   return ret
// }

// calc(2,7)

// const getFull = name => name
// let ret = getFull('john')
// console.log(ret)


// let a = "abc"
// let b = 'def'
// let c = `${a}
// ${b}`
// console.log(c)


// let arr = [2, 5, 7, 8, 9];
// // for (var i = 0; i < arr.length; i++) {

// // }
// // for (i in arr) {

// // }


// arr.forEach((item, i, newArr) => {
//   // console.log(item, index, newArr);
//   newArr[i] = item * 2
// })

// console.log(arr)

// const numbers = [10, 11, 12, 15, 20]

// numbers.forEach(item => {
//   if (item % 2 == 0) {
//     console.log(item)
//   }
// })


// let arr = [2,5,7,8,9]

// const some = (arr) => {
//   for (x in arr) {
//     if ( arr[x] % 2 === 0) {
//       return true
//     }
//   }
//   return false
// }

// const some = (arr) => {
//   for (x in arr) {
//     if ( arr[x]  === 10) {
//       return true
//     }
//   }
//   return false
// }

// const even = arr.some(item = {
//   return item % 2 === 0
// })


// const some = (arr) => {
//   for (x in arr) {
//     if ( arr[x] % 2 !== 0) {
//       return false
//     }
//   }
//   return true
// }

// const includes = (item) => {
//   for (x in arr) {
//     if (arr[x] === item) {
//       return true
//     }
    
//   }
//   return false
// }

// const number = (item) => {
//   while (item[i] ) {
//     if (arr[x] === item) {
//       return true
//     }
    
//   }
//   return false
// }

const padStart = (number) =>{
let last4digit = number.slice(-4);
let start = ''
for (var i = 0; i < number.length-4; i++){
  start += '*'
}
return start + last4digit

}

console.log(padStart('464664377327238382'))
