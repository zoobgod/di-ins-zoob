const {getAllProducts, getProducts ,insertProduct, deleteProduct, updateProduct, searchProduct, getAllProductsRender} = require('../modules/products.js')
const _getAllProducts = (req, res) => {
    getAllProducts()
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        console.log(err)
        res.status(404).json({msg:'not found'})
    })
}

const _getProducts = (req, res) => {
    getProducts(req.params.id)
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        console.log(err)
        res.status(404).json({msg:'not found'})
    })
}

const _insertProduct = (req, res) => {
    insertProduct(req.body)
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        console.log(err)
        res.status(404).json({msg:'not found'})
    })
}

const _deleteProduct = (req, res) => {
    deleteProduct(req.params.id)
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        console.log(err)
        res.status(404).json({msg:'not found'})
    })
}

const _updateProduct = (req, res) => {
    updateProduct(req.params.id, req.body)
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        console.log(err)
        res.status(404).json({msg:'not found'})
    })
}

const _searchProduct = (req, res) => {
    searchProduct(req.query.name)
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        console.log(err)
        res.status(404).json({msg:'not found'})
    })
}

const _getAllProductsRender = (req, res) => {
    getAllProducts()
    .then(data => {
        res.render('shop', {data})
    })
    .catch(err => {
        console.log(err)
        res.render('404', {msg: 'not found'})
    })
}

module.exports = {
    _getAllProducts,
    _getProducts,
    _insertProduct,
    _deleteProduct,
    _updateProduct,
    _searchProduct,
    _getAllProductsRender
    
}