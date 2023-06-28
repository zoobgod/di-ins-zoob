const fs = require('fs').promises;
const start = async()=>{
    const data = await fs.readFile('./data/hello.txt', 'utf-8')
    console.log(data)
}
start()
// const { parse } = require('path');
// try {
//     const data = fs.readFileSync('info', 'utf-8');
//     console.log(data)
// }
//    catch(err){
//     console.log('err.message')
//    }

//    fs.readFile('info', 'utf-8', (err, data)=> {
//     if(err){
//         return console.log(err)
//     }
//     console.log(data)
//    })
//    console.log('The file has been read')

// const data = [
//     {id:1, name:'Iphone', price:8000},
//     {id:2, name:'Ipad', price:12213},
//     {id:3, name:'Ipod', price:8313000},
//     {id:4, name:'Iwatch', price:811000},
//     {id:5, name:'Pididi', price:80100}


// ]

// fs.writeFile('products', JSON.stringify(data), 'utf-8', (err)=>{
//     if(err) console.log(err);
// })


// fs.readFile('products', 'utf-8', (err, data)=>{
//     if(err){
//                 return console.log(err)
//             }
//             console.log(JSON.parse(data))

// })

// fs.appendFile('hello.txt', '527327727', 'utf-8', err => {

//         if (err) console.log(err)
// })

// fs.copyFile('hello.txt', "hello2.txt", err=>{

// }
// )

// fs.mkdir('data', err=>{

// })

// fs.readdir('./data', (err, files)=>{
//     console.log(files);
// })

//  fs.deleteFile('hello.txt', "hello2.txt", err=>{

//     // }
//     // )