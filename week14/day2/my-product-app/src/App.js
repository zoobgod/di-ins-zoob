import Products from './components/Products.js';
import './App.css';
import {Routes, Route, Link} from "react-router-dom"
import Home from './components/Home.js';
import Product from './components/Product.js'

function App() {
  return (
    <div className="App">
      <nav>
      <Link to='/'>Home</Link>
      <Link to='/shop'>Shop</Link>
      </nav>
      <header className="App-header">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/zivuch' element={<>
        <Home/> 
        </>}/>
        <Route path='/Shop' element={<Products/>}/>
        <Route path='/product/:id' element={<Product/>}/>

      </Routes>
      </header>
    </div>
  );
}

export default App;
