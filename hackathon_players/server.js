const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const product_router = require('./routes/players.js')
const app = express()
dotenv.config()
app.set('view engine', 'ejs')

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(product_router.router)


app.use('/', express.static(__dirname+'/public'))
app.listen(process.env.PORT, ()=>{

    console.log(`run on ${process.env.PORT}`)
})


app.get('/main', (req,res)=> {
    res.sendFile(__dirname+'/public/index.html')
})