//Excercise1

let x = 500000;
let y = 229929199299129;

if (x>y) {
  console.log("x is the biggest number");
}

else {
  console.log("y is the biggest number");
}

//Excercise 2
let newDog = "Chihuahua"
console.log(newDog.length)

console.log(newDog.toUpperCase())
console.log(newDog.toLowerCase())

if (newDog === "Chihuahua" ) {
  console.log("I love Chihuahuas, it’s my favorite dog breed")

}
else {
  console.log ("I dont care, I prefer cats")
}

//Excercise 3

let numb = prompt ("Please enter a number") 

if (numb % 2 == 0) {
  console.log("The number is even")

}
 else {
  console.log("The number is odd")
 }

 //Excercise 4

 const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

 if (users.length === 0) {
    console.log("Nobody is online")

 }

else if (users.length === 1 ) {
  console.log(users[0] + "is online")
 }

 else if (users.length === 2) {
  console.log(users[0] + users[1] + "are online")
}

  else {
    console.log(users[0] + ", " + users[1] + " and " + (users.length - 2)+ " more users are online")
  }

 