//ex1
function compareToTen(num) {
    return new Promise((resolve, reject) => {
      if (num < 10) {
        resolve(`${num} is less than 10`)
      } else {
        reject(`${num} is greater than 10`)
      }
    })
  }
  compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error))

  compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error))

  //ex2.1
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('success')
    }, 4000)
  })

  //2.2
//   function compareToTen(num) {
//     return num < 10 ? Promise.resolve(`${num} is less than 10`) : Promise.reject(`${num} is greater than 10`)
//   }
  
//   compareToTen(15)
//     .then(result => console.log(result)
//     .catch(error => console.log('Oops something went wrong'))
  
//   compareToTen(8)
//     .then(result => console.log(result))
//     .catch(error => console.log('Oops something went wrong'))

    //2.3
    myPromise.then(result => console.log(result))
         .catch(error => console.log('Oops something went wrong'))

//ex3.1
const myPromiseNew = Promise.resolve(3)
//3.2
const myRejectedPromise = Promise.reject("Boo!")

