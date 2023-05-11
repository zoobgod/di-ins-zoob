// function map(array) {
//   let newArr = []
//   array.forEach((item, i)) => {
//     newArr.push(item * 2)
//   }
//   return newArr
// }

// let newArr = map([1, 2, 3, 4, 5])
// console.log(newArr)



// let arr = [1, 2, 3, 4, 5]
// let arr2 = arr.map(item => item * 2)

// console.log(arr2)




// let users = ['eli', 'adam', 'galina', 'ziv'];
// let users2 = users.map(item => item + '@gmail.com')
// console.log(users2)


// let arr = [1, 2, 3, 4]
// // change arr into [[2], [4], [6], [8]] using .map
// let arr2 = arr.map(x => [x * 2])
// // now convert arr2 back into arr
// let arr3 = arr2.flatMap(x => x[0])

// console.log(arr3)

//a function that returns only the numbers greater than 3
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// function map() {
//   let newArr = []
//   if (item > 3) {
//     newArr.push(item)
//   }
//   return newArr
// }
// console.log (newArr = map([1, 2, 3, 4, 5, 6, 7, 8, 9]))

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//  let newArr = arr.filter(item => item > 3)
//   console.log(newArr)

// const dragons = [ 'Tim', 'Johnathan', 'Sandy', 'Sarah' ]
// const filterName = dragons.filter(item => {
//   return item.startsWith('Sa')
// })
// console.log(filterName)



// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// // function sum() {
// //   let sum = 0
// //   for (x in arr) {
// //     sum += arr[x]
// //   }
// //   return sum
// // }
// // console.log(sum())

// let sum = arr.reduce((total, item) => {
//   return total + item
// }, 200)
// console.log(sum)


// Given n, take the sum of the digits of n.
// If that value has more than one digit,
// continue reducing in this way until a single-digit
// number is produced.
// This is only applicable to the natural numbers.
// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
// let n = 1956
// function sumOfDigits(n) {
//   let arr = n.toString().split('')
//   for (x in arr) {
//     if (x > 10) {
//       arr.reduce((total, item) => {
//         return total / 10
//       })
//     }
  
//   }
// }

// console.log(arr)


// let arr = [1, 9, 3, 9, 5, 6, 9, 8, 9]
// function howManyCandlesCanYouBlow() {
//   let highestNum = 0
//   for (x in arr) {
//     if (arr[x] > highestNum) {
//       highestNum = arr[x]
//     }
//   }
//   return arr.filter(item => item === highestNum).length
// }
// console.log(howManyCandlesCanYouBlow())

// let arr1 = [1, 2, 3, 4, 5, 6, 7]
// let arr2 = [2, 5, 7, 19]

// function sameNumbersInArray() {
//   let similarNumber = []
//   for (x in arr1) {
//     if (arr2.includes(arr1[x])) {
//       similarNumber.push(arr1[x])
//     }
// }
// return similarNumber
// }
// console.log(similarNumber)

// let arr = [2, 5]
// const a = arr[0]
// const b = arr[1]
// // const [a, b] = arr

let arr1 = [1,2,3,4,5,6];
// let arr2 = [a, b, ...arr1]
// console.log(arr2)




