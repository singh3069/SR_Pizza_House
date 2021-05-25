import './App.css';
import NavBar from "./components/NavBar";
import PizzaContainer from './components/PizzaContainer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from './components/Cart';
// import Cart from './components/Cart';





function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />

        <Switch>
          
          <Route exact path="/cart">
            <Cart/>
          </Route>

          <Route exact path="/">
          <PizzaContainer/>
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
