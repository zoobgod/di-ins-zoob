let client = "John";

const groceries = {
  fruits: ["pear", "apple", "banana"],
  vegetables: ["tomatoes", "cucumber", "salad"],
  totalPrice: "20$",
  other: {
    payed: true,
    meansOfPayment: ["cash", "creditCard"]
  }
}

const displayGroceries = () => {
  groceries.fruits.forEach(fruit => console.log(fruit))
}
//part2
const cloneGroceries = () => {
  let user = client
  client = "Betty" // because user is equal to client
  let shopping = groceries; 
  shopping.totalPrice = "35$" //because shoppung is equal to groceries
  shopping.other.payed = false 
  console.log(user) 
  console.log(shopping) // we will see the modified shopping object because it is a reference to the groceries object
}
//part3
cloneGroceries()