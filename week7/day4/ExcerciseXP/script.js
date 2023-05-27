// task1
// The output will be: I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)
// task2
function displayStudentInfo({first, last}){
    return `Your full name is ${first} ${last}`
}
console.log(displayStudentInfo({first: 'Elie', last:'Schoppik'})) 

// task3
const users = { user1: 18273, user2: 92833, user3: 90315 }

//3.1
const usersArray = Object.entries(users)

console.log(usersArray)

//3.2
const modifiedUsersArray = usersArray.map(([key, value]) => [key, value * 2])

console.log(modifiedUsersArray)

// task4
// The output will be: object.

// task5
// option 2 because the Labrador class calls the super() method with the name parameter to initialize the name property inherited from the Dog class

//task 6.1
// [2] === [2] 
//false, because arrays are objects in JS and objects are compared by reference and not value
// {} === {}
// also false because objects are compared by reference, not by value

//task 6.2
// object1.number = 4, because it gets that value before the console.log
// object2.number is 4
// object3.number is also 4
// object4.number is 5

//task 6, part 2
class Animal {
    constructor(name, type, color) {
      this.name = name
      this.type = type
      this.color = color
    }
  }
  
  class Mamal extends Animal {
    sound(sound) {
      return `Moooo I'm a ${this.type}, named ${this.name} and I'm ${this.color}. ${sound}`
    }
  }
  const farmerCow = new Mamal('Lily', 'cow', 'brown and white')
  console.log(farmerCow.sound('Moooo'))