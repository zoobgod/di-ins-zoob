
//Ex1
let favouriteFood = "chocolate";
let favouriteMeal = "breakfast";

console.log(`I eat ${favouriteFood} at every ${favouriteMeal}`);

//ex2

const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesLength = myWatchedSeries.length;
console.log(myWatchedSeriesLength);

// part1

let myWatchedSeriesSentence = "I watched " + myWatchedSeriesLength + " series: " + myWatchedSeries[0] + ", " + myWatchedSeries[1] + ", and " + myWatchedSeries[2]
console.log(myWatchedSeriesSentence);


//part2

myWatchedSeries[2] = "friends";
myWatchedSeries.push("the Sopranos");
myWatchedSeries.unshift("Family Guy");
myWatchedSeries.splice(1,1);
console.log(myWatchedSeries[1][2]);

//ex3

let tempC = 30;
let temF = tempC * 9 / 5 + 32;
console.log(tempC + "°C is " + temF + "°F.");


//ex4

let c;
let a = 34;
let b = 21;

console.log(a+b) //first expression
// Prediction: 55
// Actual: 55

a = 2;

console.log(a+b) //second expression
// Prediction: 23
// Actual: 23

//3. Undefined. We didn't define c

//4.
console.log(3 + 4 + '5');
// Prediction: 75
// Actual: 75, because 5 is a string it will be placed right next to the element before it.

//5.

typeof(15)
// Prediction: number
// Actual: number

typeof(5.5)
// Prediction: number
// Actual:number

typeof(NaN)
// Prediction: number, NaN is number unless defined as a string
// Actual: number

typeof("hello")
// Prediction: string
// Actual: string

typeof(true)
// Prediction: boolean
// Actual: boolean

typeof(1 != 2)
// Prediction: boolean
// Actual: boolean

"hamburger" + "s"
// Prediction: string = hamburgers
// Actual: hamburgers

"hamburgers" - "s"
// Prediction: NaN, cannot subtract from a string
// Actual: NaN

"1" + "3"
// Prediction: 13
// Actual:13

"1" - "3"
// Prediction:NaN cannot sub from a string
// Actual: -2 (WHY??????)

"johnny" + 5
// Prediction: johnny5
// Actual:johnny5

"johnny" - 5
// Prediction: NaN
// Actual:NaN

99 * "hello"
// Prediction:NaN
// Actual:NaN

1 != 1
// Prediction:false
// Actual:false

1 == "1"
// Prediction:true
// Actual:true

1 === "1"
// Prediction:false
// Actual:false

//EXCERCISE 6

5 + "34"
// Prediction: 534
// Actual:534

console.log(5 - "4")
// Prediction:NaN
// Actual: -1 (WHYYYYYYYY????????)

10 % 5
// Prediction: 0
// Actual:0

5 % 10
// Prediction:5 which will be the remainder of two numbers
// Actual:5 

"Java" + "Script"
// Prediction:JavaScript
// Actual:JavaScript

" " + " "
// Prediction: " "
// Actual: " "

" " + 0
// Prediction: 0 as a string
// Actual:0 as a string

true + true
// Prediction: 2 (conversion to a numbered eq of the true/false element)
// Actual: 2

true + false
// Prediction:1
// Actual:1

false + true
// Prediction:1
// Actual:1

false - true
// Prediction:-1
// Actual:-1

!true
// Prediction:false, ! sign means the opposing statement
// Actual:false

3 - 4
// Prediction: -1
// Actual:-1

"Bob" - "bill"
// Prediction:NaN cannot sub strings
// Actual:NaN


