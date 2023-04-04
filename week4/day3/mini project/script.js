function playTheGame() {
  let play = confirm("do you want to play the game?")
  if (!play) {
    alert("No problem, goodbye!")
    return
  } else {
    let number = prompt("enter a number between 0 and 10")
    if (isNaN(number)) {
      alert("Sorry Not a number, Goodbye")
    } else if (number < 0 || number > 10) {
      alert("Sorry it is not a good number, Goodbye.")
    } else {
      let computerNumber = Math.round(Math.random() * 10)
      compareNumbers(number, computerNumber)
    }
  }
}

function compareNumbers(userNumber,computerNumber) {
  let counter = 1;
  while (counter <= 3) {
    if (userNumber === computerNumber) {
      alert("WINNER")
      break
    }
    else if (userNumber > computerNumber) {
      alert("Your number is bigger then the computer’s, guess again");
      counter++;
      if (counter > 3) {
        alert("You have run out of attempts. Game over")
        break;
      }

      userNumber = prompt("enter a number between 0 and 10")
      if (isNaN(userNumber)) {
        alert("Sorry Not a number, Goodbye")
      }
      else if (userNumber < 0 || userNumber > 10) {
        alert("Sorry it is not a good number, Goodbye.")
      }
      else {
        computerNumber = Math.round(Math.random() * 10)
      }
    }
    else if (userNumber < computerNumber) { 
      alert("Your number is smaller then the computer’s, guess again");
      counter++;
      if (counter > 3) {
        alert("You have run out of attempts. Game over")
        break;
      }

      userNumber = prompt("enter a number between 0 and 10")
      if (isNaN(userNumber)) {
        alert("Sorry Not a number, Goodbye")
      }
      else if (userNumber < 0 || userNumber > 10) {
        alert("Sorry it is not a good number, Goodbye.")
      }
      else {
        computerNumber = Math.round(Math.random() * 10)
      }
    }
  }

  
}


