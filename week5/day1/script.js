// const div = document.getElementById("outer");
// console.log(div);

// const p = document.getElementById("text");
// console.log(p)

// const header = document.getElementsByTagName("h1");
// console.log(header[0]);

// for (let i = 0; i < divs.length; i++) {
//     console.log(divs[i]);
// }

// const body = document.body;
// console.log(body.lastElementChild);

// const elem = document.getElementById("inner");
// const h2 = document.createElement("h2");
// h2.innerText = "new H2 header";
// elem.appendChild(h2);

// elem.innerHTML = "<b>dom is awesome</b>";
// console.log(elem.innerHTML);
// console.log(elem.innerText);
// console.log(elem.textContent);
// console.log(elem.nodeValue);


// Exercise 1: Traversing the DOM
// Knowing how to traverse the DOM using JavaScript provides a foundation
// to altering an HTML page in real time.
// Using the HTML markup in Listing 1, perform these tasks:
// 1. Use the firstElementChild / firstChild property to access an element.
// 2. Use the lastElementChild / lastChild  property to access an element.
// 3. Use the nextElementSibling / nextSibling  property to access an element.
// 4. Use the previousElementSibling / previousSibling  property to access an element.
// 5. Use the parentNode property to access an element.
// 6. Use the childNodes property to access a group of child elements.


// Exercise 2: Targeting nodes 
// In exercise 1, you learned how to target nodes in several ways.
// Continuing to use the markup in Listing 1, perform the following tasks:
// 1. Retrieve the value of a node using nodeValue / innerText / innerHTML.
// 2. Change the value of a node using nodeValue / innerText / innerHTML.
// 3. Retrieve the value of a node attribute.
// 4. Change the value of a node attribute.

// Exercise 3: Manipulating the DOM
// Now that you know how to traverse the DOM and alter node values,
// the next logical step is to learn how to add, remove, and replace nodes.
// Perform the following tasks:
// 1. Use the appendChild method to add a node.
// 2. Use the insertBefore method to add a node.
// 3. Use the removeChild method to remove a node.
// 4. Use the replaceChild method to replace a node.

const body = document.body;
console.log (body.firstChild);
console.log (body.firstElementChild);
console.log (body.lastChild);
console.log (body.lastElementChild);

const div = document.getElementsByTagName("h2");
console.log (div[0].nextSibling);
console.log (div[0].nextElementSibling);
console.log (div[0].previousSibling);
console.log (div[0].previousElementSibling);
console.log(div[0].parentNode);
console.log(div[0].childNodes);

const elem = document.getElementById('content');
const att = elem.getAttribute('id');
elem.setAttribute('id', 'newId');
console.log(att);

console.log(div[0].nodeValue);
console.log(div[0].innerText);
console.log(div[0].innerHTML);

div.nodeValue = "new text";
div.innerText = "new text2";
div.innerHTML = "new text3";

console.log(div.innerText);

const elem2 = document.createElement("h2");
elem2.innerText = "new h2 header";
body.appendChild(elem2);
body.insertBefore(elem2, body.firstChild);
body.removeChild(elem2);
body.replaceChild(elem2, body.firstChild);



