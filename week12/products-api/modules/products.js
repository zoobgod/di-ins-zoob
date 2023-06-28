const {db} = require('../config/dbsql.js')

const getAllProducts = () => {
    return db('products')
    .select('id', 'name', 'price')
    .orderBy('name')
}

const getProducts = (id) => {
    return db('products')
    .select('id', 'name', 'price')
    .where({id})
}
const insertProduct = (product) => {
    return db('products')
    .insert(product)
    .returning("*")
}

const deleteProduct = (id) => {
    return db('products')
    .where({id})
    .del()
    .returning("*")
}

const updateProduct = (id, product) => {
    return db('products')
    .update(product)//{name;...price:...}
    .where({id})
    .returning("*")
}

const searchProduct = (name) => {
    return db('products')
    .select('id', 'name', 'price')
    .whereILike('name', '%name%')
}

// const getAllProductsRender = () => {
//     return db('products')
//     .select('id', 'name', 'price')
//     .orderBy('name')
// }
module.exports = {
    getAllProducts,
    getProducts,
    insertProduct,
    deleteProduct,
    updateProduct,
    searchProduct,
    // getAllProductsRender
}