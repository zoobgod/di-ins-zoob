const knex = require('knex')
const db = knex({
    client:'pg',
    connection: {
        host:'lucky.db.elephantsql.com', //localhost 127.0.0.1
        port: 5432,
        user:'wgjcmgyx', // postgres
        password:"AcGdUTjVaeHuKLL1QflWNhf1eynPQYlt", // 123456
        database: "wgjcmgyx" //dvdrental
    }


})

// db.select('id', 'name', 'price')
// .from('products')

db('products')
// .insert({name:'Ikey', price:1111000},
// {name:'icoffee', price:1111000}
// )
.where({id:2})
.del()
.returning('*')
// .where({id:2})
.then(data=>{
    console.log(data)
})
.catch(err=>{
    console.log(err)
})