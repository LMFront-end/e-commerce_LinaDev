import './App.css'
import { NavBar } from './components/NavBar';
import { Home } from './pages/Home';
import { Products } from './pages/Products'
import { Product } from './pages/Product';
import { Cart} from './pages/Cart';
import {Routes, Route} from 'react-router-dom';
import Checkout from './pages/Checkout';

function App() {

  return (

    <>
    <NavBar/>
      <Routes>
          <Route path={"/"} exact element={<Home />}/>
          <Route path={"/products"} exact element={<Products />}/>
          <Route path={"/products/:id"} exact element={<Product />}/>
          <Route path={"/cart"} exact element={<Cart />}/>
          <Route path={"/checkout"} exact element={<Checkout />}/>
      </Routes>
    </>
    
  );
}

export default App
