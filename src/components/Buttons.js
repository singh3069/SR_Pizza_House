import React from "react";
import { ImageSliderData } from "./ImageSliderData"; 
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./Cart";
import {useDispatchCart} from '../HOC/Hoc'

function Buttons({ current }) {
  const currentItem = ImageSliderData[current]
  const dispatch = useDispatchCart();


  const addToCart = (item) => {
    // console.log(item);
    dispatch({type:'ADD', item});
  };

  return (
    <div>
      <div className="buttons">
        <button
          onClick={() => addToCart(currentItem)}
          className=" border-solid border-2 border-WelCaTxt text-txtColor bg-bgRed shadow-lg box-border p-1 rounded-lg"
        >
          Add to 🛒
        </button>

        <button className=" border-solid border-2 border-WelCaTxt text-txtColor bg-bgRed shadow-lg box-border p-1 rounded-lg">
          Customize Your Pizza👨‍🍳
        </button>
      </div>

      <Router>
        <Switch>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Buttons;
