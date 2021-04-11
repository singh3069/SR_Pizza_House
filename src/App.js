import './App.css';
import NavBar from "./components/NavBar";
import PizzaContainer from './components/PizzaContainer';
import { Switch,  Route,} from "react-router-dom";
import Routes from './components/Routes';
// import Cart from './components/Cart';





function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes/>

    </div>
  );
}

export default App;
