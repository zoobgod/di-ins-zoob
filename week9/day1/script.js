// const getX = (callback) =>{
//     setTimeout(() =>{
//         callback(2)
//     }, 1000)
   
// }

// const getY = () =>{
//     return 3
// }

// const getXY = () =>{
//     getX((x) =>{
//         let y = getY()
//         return x + y
//     }, )
   
// }
// console.log(getXY());



// new Promise(())
// async/await function
// 1.pending
// 2.fulfilled
// 3.rejected

// const Zivuch = new Promise ((resolve, reject) =>{
//     reject('Zivuch')
// })
// console.log(Zivuch);

// const flip = () => {
//     const coin = Math.floor(Math.random() * 3)
//     return (coin < 2) ? (coin = 0) ? 'heads' : 'tails' : 'side'  }

//     const flipCoin = new Promise ((res, rej) =>{
//         const flipResult = flip()
//         if (flipResult == 'heads' || flipResult == 'tails'){
//             const obj = {
//                 res: flipResult,
//             }
//             res(JSON.stringify(obj)) }
//             else { 
//                 res(JSON.stringify(obj)) 
//             }
//         })
//     //     console.log('before')
//     // console.log(flipCoin);
//     // console.log('after')
//     flipCoin
//     .then((res) => {
//        return JSON.parse(res)
//     })
//     .then((res) => {
//         console.log(res)
//     })
//     .catch((err) => {
//         console.log(err)
//     })

// const testNum = (num) => {
//     return new Promise((resolve, reject) => {
//         if (num < 10) {
//             resolve(num + ' is less than 10, SUCCEEEEEESSSS!!! YAHOOOOO')
//         }
//         else {
//             reject(num + ' is more than 10, error!!')}
//         })
//     }
//           testNum('a')
//           .then((res) => {
//                 console.log(res)
//           })
//           .catch((err) => {
//                 console.log(err)
//           })

      

        // //   const getY = () => {
        // //     return 3
        // //   }

        //    const getX = () => {
        //     return new Promise((resolve, reject) => {  
        //     setTimeout(()=> {
        //         resolve(2)
        //     }, 2000)
        //     })
        //   }

        //   const getY = () => {
        //     return new Promise((resolve, reject) => {
        //         setTimeout(()=> {
        //             resolve(3)
        //         }, 2000)
        //         })
        //     }


        //   const getXY = () => {
        //     let x = getX()
        //     x.then((x) => {
        //         let y = getY()
        //         y.then((y) => {
        //         console.log(x + y)
        //     })
        //     })
        // }


        // getXY()
        // // .then((res) => {
        // //     console.log(res)
        // // })
        // // .catch((err) => {  
        // //     console.log(err)
        // // })


//         let result = fetch('https://jsonplaceholder.typicode.com/users')

// result.then((res) => {
//     return res.json()
// })
// .then (data => {
//     console.log(data)
// })
// .catch((err) => {
//     console.log(err)
// })
     


// TASK - create a button, after pressing which we will fetch the https://zivuch.github.io/yogaapi.json file and display the sanskrit name and the english name of the first pose on the page

// const button = document.querySelector('button')
// let arr;
fetch('https://zivuch.github.io/yogaapi.json')
.then((res) => {
    return res.json()
})
.then (data => {
    render(data)
    // arr = data
})
.catch((err) => {
    console.log(err)
})

const root = document.getElementById('root')
function render(arr) {
console.log('render', arr)
// arr.forEach(item => {const div = document.createElement('div')
// const p = document.createElement('p')
// p.innerText = item.email
// div.appendChild(p)
// root.appendChild(div)
// }) 
// SECOND OPTION
    
    const html = arr.map(item => {
        return `<div style= 'display: flex; border:1px solid #000'>
        <h2>
        ${item.sanskrit_name}</h2>
        <p>${item.english_name}</p>
        <img src="${item.img_url}" alt="">
        </div>`
    })
    root.innerHTML = html.join('')

}

// .then (res => {
//     return res.json()
// })
// .then(data => {
//     console.log(data)
// })
// .catch (err => {
//     console.log(err)
// })

// button.addEventListener('click', () => {
//     console.log(result)
// }
// )
// console.log(result)

// const button = document.querySelector('button')


// button.addEventListener('click', () => {
//     let result = fetch('https://zivuch.github.io/yogaapi.json')
//     .then (res => {
//         return res.json()
//     })
//     .then(data => {
//         console.log(data)
//     })
//     .catch (err => {
//         console.log(err)
//     })
// }
// )




       