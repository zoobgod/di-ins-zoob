// // http METHODS:

// // GET - getting data 
// // POST - send new data
// // PUT - to modify data 
// // DELETE - deleting data 

// // REST

// // GET
// // CRUD - READING
// example.com/products

// // POST
// //CRUD - CREATE
// example.com/products

// //PUT 
// //CRUD - UPDATE
// example.com/products/202



const express = require('express')
const {products} = require('./config/data.js')
const { log } = require('console')
console.log(products)
const app = express()
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.listen(3001, () => {
    console.log('running on port 3001')
})

app.get('/api/products',(req, res) =>{
    res.json(products)
} )

//GET 

app.get('/api/products/:id', (req, res)=>{
// console.log(req.params)
res.send(products)
})

//DELETE
app.delete('/api/products/:id', (req, res)=>{
    const id = req.params.id;
    const index = products.findIndex(item => item.id == id)
    if(index === -1) {
        return res.status(404).json({msg:'not found'})

    }
    products.splice(index,1)
    res.json(products)

})


app.get('/api/products/:product_id', (req, res) => {
    const id = req.params.product_id;
    const product = products.find(item => item.id == id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  });

  //search for product by name 

  //GET request - query localhost:3001?name=ip&


//   app.get('/api/search', (req, res) => {
//     console.log(req.query);
//     res.send('ok,ok')
//   })


  app.get('/api/search', (req, res) => {
    const product_name = req.query.name;
    const filteredProducts = products.filter(item => item.name.toLowerCase().includes(product_name.toLowerCase()));
    res.json(filteredProducts);
  });
  

  //POST request - create new product
  app.post('/api/products', (req, res) => {
    // console.log(req.body);
    products.push(req.body);
    res.json(products)
    })


    //PUT - update - modify product

    // /api/products/:11 - params
    // data = json{"name": "Iphone 14", price: 8000} - body

    app.put('/api/products/:id', (req, res) => {
        const id = req.params.id;
        const index = products.findIndex(item => item.id == id);
        if (index === -1) {
            return res.status(404).json({ message: 'Product not found' });
            }
            products[index] = {
            ...products[index],
            name: req.body.name,
            price: req.body.price
            }
            res.json(products);

    })

    