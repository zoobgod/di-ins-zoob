// function myFirstOnclick(e) {
//   console.log(e.type, e.target, e.target.value);
// }

// function getValue(e) {
//   console.log(e.target.value);
// }

// function getDivText(a) {
//   console.log(a.target.innerText);
// }


let arr = [
    {id:1, user:'John',email:'john@gmail.com'},
    {id:2, user:'Sara', email:'sara@gmail.com'},
    {id:3, user:'Yasaar', email:'yasaar@gmail.com'},
    {id:10, user:'Yeshna', email:'yeshna@gmail.com'},
    {id:5, user:'Varshana', email:'varshana@gmail.com'}
  ];


//   const mainBg = document.createElement('main-bg');
// function createUsers(e) {
//   mainBg.innerHTML = '';
//   for (let i = 0; i < arr.length; i++) {
//    let div = document.createElement('div');
//    div.classList.add('inner-div');
//    let img = document.createElement('img');
//     img.setAttribute('src', `https://robohash.org/${i}`);
//     div.appendChild(img);

//     let name = document.createElement('h2');
//     name.innerText = arr[i].user;
//     div.appendChild(name);

//     let email = document.createElement('h3');
//     email.innerText = arr[i].email;
//     div.appendChild(email);

//     mainBg.appendChild(div);

//   }



// }



// const root = document.createElement('root')
// function createUsers(){
//   root.innerHTML = '';
//   for(let i = 0; i < arr.length; i++){
//     let div = document.createElement('div');
//     div.classList.add('inner-div');
//     let img = document.createElement('img');
//     img.setAttribute('src', `https://robohash.org/${arr[i].id}`)
//     img.style.width = '120px';
//     div.appendChild(img);
//     let name = document.createElement('h2');
//     name.innerText = arr[i].user;
//     div.appendChild(name)
//     let email = document.createElement('p');
//     email.textContent = arr[i].email;
//     div.appendChild(email)
//     root.appendChild(div)
//   }
// }

// const div1 = document.getElementById('div1');

//   div1.addEventListener('mouseover', function() {
//     div1.style.backgroundColor = 'blue';
//   });
//   div1.addEventListener('mouseout', function() {
//     // Change the background color back to yellow
//     div1.style.backgroundColor = 'yellow';
//   });

// function changeToYellow(e) {
//   e.target.style.backgroundColor = 'yellow';
  
// }

// function changeToBlue(e) {
//   e.target.style.backgroundColor = 'blue';
  
// }

// const color_div = document.getElementById('div1');
// const div2 = document.getElementById('div2');

// color_div.addEventListener('click', function(e){
//   e.stopPropagation()
// alert('color_div')
// })

// div2.addEventListener('click', function(e){
// alert('div2')
// })


// function insertRow() {
//   let table = document.getElementById('sampleTable');
//   let row = table.firstElementChild.firstElementChild;
//   let newRow = row.cloneNode(true);
//   table.appendChild(newRow);
// }

const click = document.getElementById('jsstyle');

function changeStyle(e) {
  click.addEventListener('click', function(e) {
    alert('clicked')
  });
}

const btn = document.getElementById('btn');
function changeStyle(e) {
  btn.addEventListener('click', function(e) {
    alert('clicked')
  });
}
