//task1
// #1 "a" will be 3. 
// 1.2 If a is declared with const instead of let, the code will throw an error because const variables cannot be reassigned.

// #2 funcThree will alert 0, then 5. 
// 2.2 If a is declared with const instead of let, the code will throw an error because const variables cannot be reassigned.

// #3 funcFive will alert "hello".

// #4 funcSix will alert "test". 
// 4.2 If a is declared with const instead of let, the code will still work as expected because a is being declared in a new block scope.

// #5 The first alert will display 2, and the second alert will display 5. 
// 5.2 If a is declared with const instead of let, the code will still work as expected because "a" is being declared in a new block scope.

//task2
const winBattle = () => true

const experiencePoints = winBattle() ? 10 : 1;

console.log(experiencePoints)

// task3
const isString = (value) => {
    return typeof value === 'string'
  };

  console.log(isString('hello')); 
//true
console.log(isString([1, 2, 4, 0]))
//false

// task4
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"]

for (let i = 0; i < colors.length; i++) {
  console.log(`${i + 1}# choice is ${colors[i]}.`)
}

if (colors.includes("Violet")) {
  console.log("yeah")
} else {
  console.log("no")
}

// task5
// "commented out because of the previous task."
// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"]
const ordinal = ["th", "st", "nd", "rd"];

for (let i = 0; i < colors.length; i++) {
  const suffix = i < 4 ? ordinal[i] : ordinal[0]
  console.log(`${i + 1}${suffix} choice is ${colors[i]}.`)
}

// task6
let bankAmount = 1000; // i used let because the value will change
const VAT = 0.17; // i used const because the value probably won't change

const expenses = ["+200", "-100", "+146", "+167", "-2900"]

for (let i = 0; i < expenses.length; i++) {
  const expense = parseFloat(expenses[i]) 
  const tax = expense * VAT
  expenses[i] = (expense + tax).toFixed(2)
  bankAmount -= expense // subtract expense from bankAmount
  bankAmount += parseFloat(expenses[i]) // add taxed expense to bankAmount
}
console.log(`your bank account standing at the end of the month is ${bankAmount.toFixed(2)}.`)

