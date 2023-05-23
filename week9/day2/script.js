// promises methods
// 1. Promise.all
// 2. promise.allSettled
// 3. Promise.race
// 4. Promise.any
// 5. Promise.resolve
// 6. Promise.reject
// 7. Promise.try
// 8. Promise.prototype.catch
// 9. Promise.prototype.finally
// 10. Promise.prototype.then
// 11. Promise.prototype.toSource
// 12. Promise.prototype.toString
// 13. Promise.prototype.valueOf
// 14. Promise.prototype[@@toStringTag]


// const promise1 = new Promise((res, rej) => {
//     res('resolve promise1')
// })

// const promise2 = new Promise((res, rej) => {
//     rej('reject promise2')
//     // res('resolve promise2')
// })

// const promise3 = new Promise((res, rej) => {
//     res('resolve promise3')
// })

// let arr = [promise1, promise2, promise3]
// // 
// // Promise.allSettled(arr)
// // Promise.race(arr)
// // Promise.any(arr)
// // Promise.resolve('resolve promise1')
// .then(result => {
//     console.log('this is result', result)
// })
// .catch(err => {
//     console.log('this is error', err)
// }
// )


// const urls = [
//     "https://jsonplaceholder.typicode.com/users",
//     "https://jsonplaceholder.typicode.com/posts",
//     "https://jsonplaceholder.typicode.com/albums"
//   ];
  
// fetch(urls[0])
// .then((res) => {
//     console.log(res)
// })
// .catch((err) => {
//     console.log(err)
// })
// fetch(urls[1])
// .then((res) => {
//     console.log(res)
// })
// .catch((err) => {
//     console.log(err)
// })
// fetch(urls[2]).then((res) => {
//     console.log(res)
// })
// .catch((err) => {
//     console.log(err)
// })


// let arr = urls.map(url => {
//     return fetch(url).then(res => res.json())
// })
// console.log(arr)

// Promise.allSettled(arr)
// .then(results => {
//     console.log(results)
// })
// .catch(error => {
//     console.log(error)
// })



//   let fetch1 = fetch(urls[0])
//   .then(res => {
//     console.log(res);
//     return 'resolve promise1';
//   })
//   .catch(err => {
//     console.log(err);
//   });

// let fetch2 = fetch(urls[1])
//   .then(res => {
//     console.log(res);
//     return 'resolve promise2';
//   })
//   .catch(err => {
//     console.log(err);
//   });

// let fetch3 = fetch(urls[2])
//   .then(res => {
//     console.log(res);
//     return 'resolve promise3';
//   })
//   .catch(err => {
//     console.log(err);
//   });

// Promise.allSettled(urls)
// .then((res) => {
//     console.log(res)
// })
// .catch((err) => {
//     console.log(err)
// })
  



// es8 async await are syntactic sugar for promises that we use to handle asynchronous code and
// make it look like synchronous code
// async await is a way to handle promises in a synchronous way and it makes our code more readable

// async function getFirstName() {
//     //takes a few sec to get from DB
//     setTimeout(() => {
//     return 'Jonny'}, 3000)
// }
// async function getLastName() {
//      //takes a few sec to get from DB
//     setTimeout(() => {
//         return 'Jonny'}, 2000)
// }
// const getUserFullName = async () => {
//     const firstName = await getFirstName()
//     const lastName = await getLastName()
//     console.log (`${firstName} ${lastName}`)
// }
// getUserFullName()

// async function getUsers() {
//     try {
//         let res =   await  fetch('https://jsonplaceholder.typicode.com/users')
//     let data = await res.json()
//     return data
//     }
//     catch(err) {
//         console.log(err)
//     }
// }
//     async function renderUsers() {
//         let users = await getUsers()
//         console.log(users)
//     }
//     // renderUsers()
//     async function x() {
//         return 1
//     }
//     let y = x()
//     console.log(y)
    
   
    // users.then(val => console.log(val))
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(res => res.json())
    // .then(data => console.log(data))
    // .catch(err => console.log(err))
// }
// getUSers()
// let x = name()
// x.then(res=>console.log(res))
// option 1
// const name = async() => {

// } // option 2
// const name = async function() {
    
//     } //    option


//async in loops!!!

// const timeout = async (milliseconds, id) => {
//     await new Promise((resolve) => {
//         setTimeout(() => {
//             console.log(id, 'done!')
//             resolve()
//         }, milliseconds)
//     })
// }

// const testLoops = async() => {
//     console.log('before ')
//     let arr = ['first', 'second', 'third']
//    for (const item of arr){
//         await timeout(3000, item)
//     }
//     console.log('after')
// }
// testLoops()


const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums"
  ];

// //   const getData = async function() {
// //         try {
// //             const [ users, posts, albums ] = await Promise.all(urls.map(url => {
// //                 return fetch(url).then(res => res.json())
// //             }))
// //             console.log('users', users)
// //             console.log('posts', posts)
// //             console.log('albums', albums)
// //         }
// //         catch(err) {
// //             console.log('oops', err)
// //         }
// //   }
// //     getData()

// let arr_url = urls.map(url => {
//     return fetch(url).then(res => res.json())
// })

// async function getData(arr) {
//     // for (i in arr) {
//         let res = await Promise.all(arr_url)
//         // let data = await res.json()
//         console.log(res)}
//     // }}
//     // getData(arr_url)

//    getData(arr_url)

const getData = async function() {
    const [a, b, c] = await Promise.all(urls.map(async url => {
        const resp = await fetch(url)
       return resp.json()
}))
    console.log(a, b, c)
    }
    getData()
