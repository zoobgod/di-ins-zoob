// for (let index = 0; index <5; index = index+3) {
//   console.log(index);
// }

// for (let index = 0; index <15; index++) {

//   if (index % 2 === 0) {
//     console.log(index + " is even");}
//     else {
//       console.log(index + " is odd")
//     }
//   }


// let arr = [0, 56 ,1, 2, 3, 4, 58, 9, 56]
// let elm = 56
// for (let index=0; index < arr.length; index++) {
// if (arr[index] == elm) {
//   arr.splice(index, 1)
//   console.log(arr)
// }

// else {
//   console.log(arr)
// }

// }

// let numb = 6
// let pow = 3
// let res = 1; // return for pow0
// for (let index = 0; index < pow; index++ ) {
// res = res * numb
// }
// console.log(res)


// let range = 8
// for (let i = 1; i <= range; i++ ) {
//   let str = '';
//   for (let j = 1; j <= i; j++){
//    str = str + j + '';
//   }
//   console.log(str)
// }

// let range = 8;
// for(let i = 1; i <= range; i++){
//   let str = '';
//   for(let j = 1; j <= i; j++){
//     str = str + j + " ";
//   }
//   console.log(str);
// }


// const users =  [
//   {
//     user_id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     contact: {
//       email: 'Sincere@april.biz',
//       phone: '+972505556666'
//     }
//   },
//   {
//     user_id: 2,
//     name: 'Ervin Howell',
//     username: 'Antonette',
//     contact: {
//       email: 'Shanna@melissa.tv',
//       phone: '+972507776666'
//     }
//   },
  
//   {
//     user_id: 3,
//     name: 'Clementine Bauch',
//     username: 'Samantha',
//     contact: {
//       email: 'Nathan@yesenia.net',
//       phone: '+972501234567'
//     }
//   }
// ]

// console.log(users)
// for (x in users) {
//   console.log(users[x].user_id);
//   console.log(users[x].name);
//   console.log(users[x].username);
//   console.log(users[x].contact.email);
//   console.log(users[x].contact.phone);
 
// }


// let arr = [2,5,6,7,8]

// for(let i = 0; i <arr.length; i++) {
// if (arr[i] === 5 ) {
// break;

// }
// console.log(arr[i]);

// }

// let names= ["john", "sarah", 23, "Rudolf",34]
// let str = isNaN();
// for (let i = 0; i <names.length; i++) {
//     if (names[i] !=== str);
//     continue;
//   }

//   for (let i = 0; i <names.length; i++) {
//     console.log(names[i])
//   }


  let names= ["john", "sarah", 23, "Rudolf",34]
let str = isNaN();
for (i in names) {
  if (isNaN(names[i])) {
    let arr = names[i].split('')
    if(arr[0] !== arr[0].toUpperCase()) {
      arr[0] = arr[0].toUpperCase();
      console.log(arr.join(''));
    }
      else {
        console.log(names[i]);
      }
  }


}


  
  