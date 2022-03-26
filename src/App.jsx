import './App.css'
import { NavBar } from './components/NavBar';
import { Home } from './pages/Home';
import { Products } from '../src/pages/Products'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (

    <BrowserRouter>
    <NavBar/>
      <Routes>
          <Route path={"/"} exact element={<Home />}/>
          <Route path={"/products"} exact element={<Products />}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App
