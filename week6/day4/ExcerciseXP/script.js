//ex1
const sum = (a, b) => a + b
console.log(sum(1, 2))
//ex2

function kilosToGrams1(kg) {
    return kg * 1000
  }
  console.log(kilosToGrams1(2.5))
  
  // Function expression
  const kilosToGrams2 = function(kg) {
    return kg * 1000
  };
  console.log(kilosToGrams2(2.5))
  // main difference between function declaration and function expression is that function declarations are put to the top of the scope, while function expressions aren't
  
  // Arrow function
  const kgToGrams3 = kg => kg * 1000
  console.log(kgToGrams3(2.5))

//ex3
function displayFuture(numChildren, partnerName, geoLocation, jobTitle) {
    const sentence = `You will be a ${jobTitle} in ${geoLocation}, and married to ${partnerName} with ${numChildren} kids.`;
    document.body.innerHTML = sentence;
  }
  
  displayFuture(20000, "Charlotte", "Bordeaux", "Pro soccer player for Bordeaux FC");

  //ex4
//   ((userName) => {
//   const navbar = document.createElement('nav')
//   navbar.classList.add('navbar')

//   const userDetails = document.createElement('div')
//   userDetails.classList.add('user-details')
//   userDetails.innerText = `Welcome ${userName}`
//   navbar.appendChild(userDetails)

//   document.body.appendChild(navbar)
// })('John');

//ex5
  function makeJuice(size) {
    const ingredients = [];
  
    function addIngredients(ingredient1, ingredient2, ingredient3) {
      ingredients.push(ingredient1, ingredient2, ingredient3);
    }
  
    function displayJuice() {
      const sentence2 = `The client wants a ${size} juice, containing ${ingredients.join(', ')}.`;
      document.body.innerHTML = sentence2;
    }
  //part2, invoking the functions twice
    addIngredients('apple', 'banana', 'orange');
    addIngredients('strawberry', 'kiwi', 'pineapple');
    displayJuice();
  }
  
  makeJuice('large');