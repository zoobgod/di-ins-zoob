// const numbers = [5,0,9,1,7,4,2,6,3,8];

// for (let i =0; i < numbers.length; i++) {
//  for (let j = 0; j < numbers.length; j++) {
//   if(numbers[i] < numbers[j]){
//     let temp = numbers[i];
//     numbers[i] = numbers[j];
//     numbers[j] = temp;

//   }
//  }
// }

// console.log(numbers);

// let x = 2
// let y = 4
// console.log(x+y);


// DECLARING A FUNCTION


// let x = 9
// let y = 1
// let price = 100

// function sum(x,y,a) {
//   // console.log(x +y)
//   return x + y + a
// }

// console.log(sum(10,4,3))

// function getPrice() {
//  let ret = sum()
//  return price + ret
// }

// let newPrice = getPrice;


// if(sum()) {
//   console.log('ok')
// }
// else {
//   console.log('not ok')
// }

// console.log('newPrice is ', newPrice)


// function helloWorld() {
//   return prompt()
// }
// helloWorld()

// let x = prompt()


// function squareRT() {
//  return x * x
// }

// console.log(squareRT())


// function findSquare(numb) {
//   return numb * numb
// }

// console.log(findSquare(9))


// function calFahrenheit(celsius) {
//   return (celsius * 9/5) + 32
 
// }

// let far = calFahrenheit(900)
// console.log(far)

// const vowels = ["a", "e", "i", "o", "u"];


// function countVowel(str) {
  
//   // let str = str.toLowerCase(); WHY THIS DOESNT WORK??
//   let count = 0
 
//   for (let i = 0; i < str.length; i++) {
//     if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
//       count++
//     }
//   }

//   return count
// }

// let vowels = countVowel("umbrella")
// console.log(vowels)

// function parentsAge(me) {
//   let mum = 2 * me;
//   let dad = 1.2 * mum
//   // return [mum, dad]
//   return {
//     dadage : dad,
//     mumage: mum
//   }

// }
 
//   let ages = parentsAge(20);
//   // console.log(`My dad age is ${ages[1]}. My mom age is ${ages[0]}.`)
  
//   console.log(`My dad age is ${ages['dadage']}. My mom age is ${ages.mumage}.`)


  // console.log('My dad age is ' + dad + 'My mom age is ' + mum);
  // console.log(`My dad age is ${dad}. My mom age is ${mum}.`)

// let obj = {
//   first_name: 'John',
//   last_name : 'The King',
//   full_name: function() {
//     return this.first_name + ' ' + this.last_name
//   }
// }
// let fn = obj.full_name()
// console.log(fn)

// function checkPallindrome(str) {
//   str = str.toLowerCase()
//   let arr = str.split()
//   for (i = 0; i < arr.length; i++) {
//     if(str[i] != str[str.length - i - 1]){

//     }
    
//   }
// }

// console.log(pallindrome(prompt()))


// function checkPalindrome(str) {
//   str = str.toLowerCase();

//   // return str == str.split('').reverse().join('')
//   for (let i = 0; i < str.length; i++) {
//     if(str[i] != str[str.length - i - 1]){
//       return false
//     }
//    }
//    return true  
// }

// console.log(checkPalindrome())

