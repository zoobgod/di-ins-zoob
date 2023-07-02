
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
const Products = (props) => {
    
    //
    const[products, setProducts] = useState([])
    const[search, setSearch] = useState('')
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    //
    useEffect(()=>{
        allProducts();

    }, [])
    //
    const allProducts = async() => {

        try {
            const res = await fetch (`http://localhost:3030/api/products`);
            const data = await res.json();
            setProducts(data)
        }
        catch(e) {
            console.log(e)
        }
    }

    const searchProducts = async() => {

        try {
            const res = await fetch (`http://localhost:3030/api/search?name=${search}`);
            const data = await res.json();
            setProducts(data)
        }
        catch(e) {
            console.log(e)
        }
    }

    const addProduct = async(e) => {
        e.preventDefault();
        const fetchData = async() => {
            try {
                const res = await fetch (`http://localhost:3030/api/products`, {
                    method:'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({name, price})
                })
                const data = await res.json();
                setProducts(data)
            }
            catch(e) {
                console.log(e)
            }
        }
        fetchData()
    }

    return (
        <div>
        <h1>Shop</h1>
        <div>
            <input onChange={(e)=>setSearch(e.target.value)}/>
            <button onClick={searchProducts}>
                Press me
            </button>
        </div>
        <div>
            <form onSubmit={addProduct}>
                Name: <input onChange={(e)=> setName(e.target.value)}/>
                Price: <input onChange={(e)=> setPrice(e.target.value)}/>
                <input type='submit' value={'Add'}/>
            </form>
        </div>
        {
            products ? products.map(item => {
                return(
                    <div key={item.id} style={{display:'inline-block', padding:'20px', margin:'20px', border:'1px solid green'}}>
                        <h4>{item.name}</h4> <p>{item.price}</p>
                        <Link to={`/product/${item.id}`}>Shop now</Link>
                        </div>
                )
            }) : null
        }
        </div>

    )
}

export default Products;