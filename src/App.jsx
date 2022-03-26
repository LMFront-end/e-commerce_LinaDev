import './App.css'
import { NavBar } from './components/NavBar';
import { Home } from './pages/Home';
import {Switch, Route} from 'react-router-dom';

function App() {

  return (

    <>
    <NavBar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/products" component={Products}/>
        <Home />
      </Switch>
    </>
    
  );
}

export default App
