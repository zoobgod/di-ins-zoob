// function firstFunction() {
//     console.log('first')
// }

// function secondFunction() {
//     firstFunction()
//     console.log('second')
// }

// function thirdFunction() {
//     console.log('third')
// }


// setTimeout(() => {
// }, 1000)
// secondFunction()
// thirdFunction()



// //XMLHttpRequest (XHR) objects are used to interact with servers. You can retrieve data from a URL without having to do a full page refresh. This enables a Web page to update just part of a page without disrupting what the user is doing.
// let xhr = new XMLHttpRequest()
// // open(method, url, [async, user, password])
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/users')
// xhr.send(); // send request
// // onload
// xhr.onload = function () {
//     console.log(xhr.response)
// } // success
// xhr.onerror = function () {
//     console.log('something went wrong with')
// } // error handling
// xhr.onprogress = function (event) {
//     console.log(event.loaded, event.total, event.lengthComputable)
// } // progress bar


//html page with an input that will take a category to fetch chuck norris joke from an api, every time that you click on the button you get new jokes
// const data = null;
// const jokeElement = document.getElementById('joke');

// const xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

// xhr.onload = function () { 
//     const joke = JSON.parse(xhr.response);
//     jokeElement.textContent = joke.value;
// }

// let button = document.querySelector('.button')
// button.addEventListener('click', onButtonClick)

// function onButtonClick() {   
//     const category = prompt('Enter a category to sort the jokes by:');
//     const url = category ? `https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/search?query=${category}` : 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random';
//     xhr.open('GET', url);
//     xhr.setRequestHeader('accept', 'application/json');
//     xhr.setRequestHeader('X-RapidAPI-Key', '9d89230aaemsh13113542eb2d5a2p1b20eejsn88eb8e1f39a7');
//     xhr.setRequestHeader('X-RapidAPI-Host', 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com');
//     xhr.send(data);
// }


// function getRandomJoke(e) {
//     e.preventDefault()
//     // console.log('clicked')
//     const xhr = new XMLHttpRequest();
//     xhr.withCredentials = true;

//     xhr.open('GET', `https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random?category=${e.target.cat.value}`);
   

//     xhr.setRequestHeader('accept', 'application/json');
// xhr.setRequestHeader('X-RapidAPI-Key', '9d89230aaemsh13113542eb2d5a2p1b20eejsn88eb8e1f39a7');
// xhr.setRequestHeader('X-RapidAPI-Host', 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com');

// //timeout
// xhr.timeout = 10000;

// //response time
// xhr.responseType = 'text';
// xhr.send();


// xhr.onload = () => {
    
//     let joke = JSON.parse(xhr.response).value
//     document.getElementById('root').innerHTML = joke
//     console.log(JSON.parse(xhr.response).value)
// }
// }




//     const xhr = new XMLHttpRequest();
//     xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts');

   
// xhr.responseType = 'json';
// xhr.setRequestHeader('Content-type', 'application/json')

// let article = {
//     title: 'New Article Title',
//     body: 'New Article Body',
// }



// xhr.send(JSON.stringify(article));


// xhr.onload = () => {
//     console.log(xhr.response)
// }




const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

xhr.responseType = 'json';
xhr.send();
xhr.onload = () => {
    //let joke = JSON.parse(xhr.response).value
    // document.getElementById('root').innerHTML = joke
    console.log(xhr.response)
    let arr = xhr.response
    const content = arr.map(item =>{
        return `<div style = "display:inline-block;border: 1px solid #000">
        <img src= "https://robohash.org/${item.id}?size=150x150"
        <h2>${item.name}</h2>
        <p>${item.email}</p>
        <p>${item.username}</p>
        </div>`
    } )
    document.getElementById('root').innerHTML = content.join('')
}


   




