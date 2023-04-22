//ex1
const h1 = document.getElementsByTagName('h1')[0]
console.log(h1)

// const article = document.getElementsByTagName('article')[0]
// console.log(article.firstElementChild)

//ex2
const article = document.getElementsByTagName('article')[0]
article.removeChild(article.lastElementChild)
console.log(article.lastElementChild)


//ex3
const h2 = document.getElementsByTagName('h2')[0]
h2.addEventListener('click', function() {
      h2.style.backgroundColor = 'red';
    });

//ex4

const h3 = document.getElementsByTagName('h3')[0]
h3.addEventListener('click', function() {
      h3.style.display = 'none';
    });
//ex5

let button = document.createElement('button')
button.textContent = 'henlou'
let body = document.getElementsByTagName('body')[0]
button.addEventListener('click', function() {
  body.style.fontWeight = 'bold';
});

document.body.appendChild(button)

console.log(button)
