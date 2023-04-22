///ex 1


setTimeout(function(){
  alert('Hello! This is an alert after 5 seconds.');
}, 5000); 


setTimeout(function() {
  var container = document.getElementById('container');
  var paragraph = document.createElement('p');
  paragraph.textContent = 'Hello World';
  container.appendChild(paragraph);
}, 2000);


let intervalID;
let counter = 0;

function addParagraph() {
  const container = document.getElementById("container");
  const paragraph = document.createElement("p");
  paragraph.textContent = "Hello World";
  container.appendChild(paragraph);
  counter++;

  if (counter >= 5) {
    clearInterval(intervalID);
  }
}

intervalID = setInterval(addParagraph, 2000);

const button = document.getElementById("stop-button");
button.addEventListener("click", function () {
  clearInterval(intervalID);
});

// ex2


