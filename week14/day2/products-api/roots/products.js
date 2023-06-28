const express = require('express')
const router = express.Router()
const {_getAllProducts} = require('../controllers/products.js')
const {_getProducts} = require('../controllers/products.js')
const {_insertProduct} = require('../controllers/products.js')
const {_deleteProduct} = require('../controllers/products.js')
const {_updateProduct} = require('../controllers/products.js')
const {_searchProduct} = require('../controllers/products.js')
const {_getAllProductsRender} = require('../controllers/products.js')


router.get('/api/products', _getAllProducts)
router.get('/api/products/:id', _getProducts)
router.post('/api/products', _insertProduct)
router.delete('/api/products/:id', _deleteProduct)
router.put('/api/products/:id', _updateProduct)
router.get('/api/search', _searchProduct)
router.get('/ejs/products', _getAllProductsRender)

module.exports = {
    router
}