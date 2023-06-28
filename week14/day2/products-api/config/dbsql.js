const knex = require('knex');
const dotenv = require('dotenv').config()

const db = knex({
    client:'pg',
    connection: {
        host:process.env.DB_HOST, //localhost 127.0.0.1
        port: process.env.DB_PORT,
        user: process.env.DB_USER, // postgres
        password:process.env.DB_PASS, // 123456
        database: process.env.DB_NAME //dvdrental
    }


})

module.exports ={
    db
}