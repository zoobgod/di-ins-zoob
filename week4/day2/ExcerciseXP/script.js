// EX 1


function infoAboutMe() {
  let name = 'Nick'
  let age = '23'
  let hobby1 = 'waterskiing'
  let hobby2 = 'gaming'

  console.log('My name is ' + name + ' and i am ' + age + ' years old. I enjoy ' + hobby1 + ' and ' + hobby2);
}

infoAboutMe()

function infoAboutPerson(personName, personAge, personFavoriteColor) {

  console.log('Your name is ' + personName + ' you are ' + personAge + ' years old. Your favourite colour is ' + personFavoriteColor);
}
infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow")




//EX 2

// function calculateTip() {
//   let billAmount = prompt();
//   let totalAmount = 0;
//   let tipAmount1 = billAmount * 0.20;
//   let tipAmount2 = billAmount * 0.15;
//   let tipAmount3 = billAmount * 0.10;

//   if (billAmount < 50) {
//     totalAmount = Number(billAmount) + tipAmount1; // HAD TO USE THE 'Number' function in order for this code to work. Don't understand why without this function i get strings in the console.log
//     console.log(Number(totalAmount));
//   }

//   else if (billAmount > 50 && billAmount < 200) {
//     totalAmount = Number(billAmount) + tipAmount2;
//     console.log(Number(totalAmount));
//   }

//   else {
//     totalAmount = Number(billAmount) + tipAmount3;
//     console.log(Number(totalAmount));
//   }
// }

// calculateTip();


// EX 3

function isDivisible(divisor) {
  let divisibleNumbers = []
  let sum = 0
for (i = 0; i < 500; i++) {
  // for (j = 0; j <500; j++) {
 if (i % divisor === 0) {
   divisibleNumbers.push(i)
  // console.log('Outcome:' + i)
   sum += i
      }
    // }
  }
  console.log("Outcome: " + divisibleNumbers)
  console.log('Sum: ' + sum)
}

isDivisible(30)


//ex 4

// the following code was accessing the wrong value of stock, thus the stock always returned as 0. Next part of code fixes that issue

// const stock = { 
//   "banana": 6, 
//   "apple": 0,
//   "pear": 12,
//   "orange": 32,
//   "blueberry":1
// }  

// const prices = {    
//   "banana": 4, 
//   "apple": 2, 
//   "pear": 1,
//   "orange": 1.5,
//   "blueberry":10
// } 



// let shoppingList = ['banana', 'apple', 'orange']
// let cartValue = 0

// function myBill() {
//   for (i = 0; i < shoppingList.length; i++) {
//  if (stock.apple in stock > 0) {
//   cartValue += prices.apple
//     }
    
//     else if (stock.banana in stock > 0) {
//       cartValue += prices.banana
//         }

//         else if (stock.orange in stock > 0) {
//           cartValue += prices.orange
//             }
//   }
//   console.log(cartValue)
// }

// myBill()


const stock = { 
  "banana": 6, 
  "apple": 0,
  "pear": 12,
  "orange": 32,
  "blueberry":1
}  

const prices = {    
  "banana": 4, 
  "apple": 2, 
  "pear": 1,
  "orange": 1.5,
  "blueberry":10
} 

let shoppingList = ['banana', 'apple', 'orange']
let cartValue = 0

function myBill() {
  for (let i = 0; i < shoppingList.length; i++) {
    let item = shoppingList[i];
    if (stock[item] > 0) {
      cartValue += prices[item];
      // stock[item] -= 1;
    }
  }
  console.log(cartValue);
}

myBill();



//EX 5

function changeEnough (itemPrice, amountOfChange) {
  const quarterValue = .25
  const dimeValue = .10
  const nickelValue = .05
  const pennyValue = .01

  let totalChange = (amountOfChange[0] * quarterValue) + (amountOfChange[1] * dimeValue) + (amountOfChange[2] * nickelValue) + (amountOfChange[3] * pennyValue); 
  if (itemPrice < totalChange) {
    console.log('true')
    return(true)
  }
  else {
    console.log('false')
    return(false)
  }
}

changeEnough(2000,[25,20,5,0])

//ex 6

function hotelCost() {
  let stayAmount = prompt('enter the amount of days you wish to stay')
  let costPerNight = 140
  let costOfStay = 0
  while (isNaN(stayAmount)) {
    alert('Entered information is not a number. Enter a valid number')
    stayAmount = prompt('enter the amount of days you wish to stay')
   }
    costOfStay = costPerNight * Number(stayAmount)
    console.log(Number(costOfStay))

    return (costOfStay = costPerNight * Number(stayAmount))
}


 function planeRideCost() {
  let destination = prompt("Where do you want to fly?")
  let costPlane = 0
  while (!isNaN(destination)) {
    alert("Entered information is not a text, enter your destination again")
    destination = prompt("Where do you want to fly?")
  }

  if (destination.toLowerCase() === "london") {
    costPlane = 183
    console.log('Ticket price to London = 183$')
  }
    else if (destination.toLowerCase() === "paris") {
      costPlane = 220
      console.log('Ticket price to Paris = 220$')
    }
      else {
        costPlane = 300
        console.log('Your ticket price is 300$')
      }
      return costPlane
 }

 

 function rentalCarCost() {
  let daysOfRent = prompt("For how long do you wish to rent a car?")
  let costOfRental = 0
  let dailyCost = 40
  while (isNaN(daysOfRent)){
    alert("Entered information is not valid, enter your amount again")
    daysOfRent = prompt("For how long do you wish to rent a car?")
  }
   costOfRental = daysOfRent * dailyCost
   console.log(Number(costOfRental))
  return costOfRental
 }
 


 function totalVacationCost() {
  let costOfStay = hotelCost()
  let costPlane = planeRideCost()
  let costOfRental = rentalCarCost()
  console.log(Number(costOfStay) + Number(costPlane) + Number(costOfRental))
 }
 
 totalVacationCost()


