// // function solution(S) {
// //   let len = S.length;
// //   let foundA = -1;
// //   let foundB = -1;
// //   for (let i = 0; i < len; i++) {
// //     if (S[i] === 'a') {
// //       foundA = i;
// //     } else if (S[i] === 'b') {
// //       foundB = i;
// //     }
// //     if (foundB < foundA && foundB !== -1 && foundA !== -1) {
// //       return false;
// //     }
// //   }
// //   return true;
// // }
 

// function solution(S) {
//   let foundB = false
//   let len = S.length;
//   for (let i=0; i<len; i++) {
//     if (S[i] === 'b') {
//       foundB = true
//     }
//     else if (foundB === true) {
//       return false
//     }
//   }
//   return true
// }


// function testSolution() {
//   const testCases = [
//     { input: 'aabbb', output: true },
//     { input: 'ba', output: false },
//     { input: 'aaa', output: true },
//     { input: 'b', output: true },
//     { input: 'abba', output: false },
//     { input: 'a', output: true },
//     { input: 'bbaa', output: false },
//     { input: 'bbba', output: false },
//     { input: 'aabb', output: true },
//     { input: 'bababab', output: false },
//     { input: 'babababa', output: false },
//     { input: 'aabababb', output: false },
// { input: 'baaab', output: false },
//     { input: 'bbabbabbababbab', output: false },
//     { input: 'babaabaaab', output: false },
//     { input: 'ab', output: true }
//   ];
// for (let i = 0; i < testCases.length; i++) {
//     const { input, output } = testCases[i];
//     const result = solution(input);
//     console.log(`Input: "${input}", Output: ${result}, Expected Output: ${output}`);
//   }
// }

// testSolution();


// const population = {
//   tokyo: 37833000,
//   delhi: 24953000,
//   shanghai: 22991000,
//   saoPaulo: 21650000,
//   mexicoCity: 21581000,
//   cairo: 20485000,
//   dhaka: 20246000,
// }

// const population2 = {
//   tokyo: 1,
//   telaviv: 7777777,
//   newyork: 5555555,
// }

// let population3 = {...population, ...population2}
// console.log(population3)



// // let keys = Object.keys(population)
// // Object.keys(population).forEach((item, i) => {
// //   console.log(item, population[item])
// // }
// // )

// let arr = Object.entries(population)
// console.log(arr)

// arr.forEach(([key, value], i) => {
//   const [key, value] = item
//   console.log(key, value)
// }
// )

// const population2 = [
//   ['tokyo', 37833000],
//   ['delhi',24953000],
//   ['shanghai', 22991000]
// ]

// const population3 = Object.fromEntries(population2)

// const population2 = {...population}

// const population2 = JSON.stringify(population2)
// const population4 = JSON.parse(population2)
// console.log(population4)

// const {tokyo, delhi, shanghai} = population

// const users = {
//   user1 : { age: 44, name: 'picard'},
//   user2 : { age: 12, name: 'worf'},
//   user3 : { age: 109, name: 'mckoy'},
// }

// // filter for all users older than 30 and store their data in an array use array.filter and array.map

// // [
// //   {id:'user1',age:44, name: 'picard'},
// //   {id:'user3',age:109, name: 'janeway'}
// // ]


// const usersKeys = Object.keys(users)

// console.log(usersKeys)
// const adults = usersKeys.filter(key => users[key].age > 30)
// console.log(adults)
// const olders = adults.map(id => ({id, ...users[id]}))
// console.log(olders)


// class Person {
//   constructor(name) {
//     this.name = "John"
    
//   }
//   getName() {
//    return this.name
//   }
//   setName() {
//   this.name = name
// }
// greet() {
//   console.log(`Hello, My name is ${this.name}`)
// }
// }

// let personA = new Person('Mary')

// let personB = new Person('John')

// personA.greet()
// personB.greet()

class Animal {
  constructor(name) {
    this.name = name
  }
  speak() {
    console.log(`${this.name} makes a noise`)
  }
}
let animal1 = new Animal('dog')
let animal2 = new Animal('cat')

animal1.speak()
animal2.speak()