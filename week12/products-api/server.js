// const {db} = require('./config/dbsql.js')

// db('products')
// .select('name')
// .then(data=>{
//     console.log(data)
// })
// .catch(err =>{
//     console.log(err)
// })

const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const product_router = require('./roots/products.js')
const app = express()
dotenv.config()
app.set('view engine', 'ejs')


app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/', express.static(__dirname+'/public'))
app.listen(process.env.PORT, ()=>{

    console.log(`run on ${process.env.PORT}`)
})


app.get('/main', (req,res)=> {
    res.sendFile(__dirname+'/public/index.html')
})

app.get('/shop', (req,res)=> {
    let login = true;
    res.render('shop', {
        login: login
    })
})

// app.get('/shop', (req,res)=> {
//     let users = [
//         {name: 'aa', username:'aaaaaa'},
//         {name: 'bb', username:'aaavvsddscaaa'},
//         {name: 'q121', username:'dwwffe'}
//     ];
//     res.render('users', {
//         login: login
//     })
// })



app.get('/contact', (req,res)=> {
    
    res.render('contact')
})

// app.get('/shop', (req,res)=> {
    
//     res.render('products')
// })

app.use(product_router.router)