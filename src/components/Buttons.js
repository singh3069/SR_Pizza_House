import React from "react";
import { ImageSliderData } from "./ImageSliderData";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./Cart";
import { useDispatchCart } from "../HOC/Hoc";

function Buttons({ current }) {
  const currentItem = ImageSliderData[current];
  const dispatch = useDispatchCart();

  const addToCart = (item) => {
    dispatch({ type: "ADD", item });
  };

  // const customizePizza = () => {
  //   // dispatch({type:'CUSTOM'});
  //   // alert("I'm working on it ")
  // }
  return (
    <div>
      <div className="buttons">
        <button
          onClick={() => addToCart(currentItem)}
          className=" border-solid border-2 border-WelCaTxt text-txtColor bg-bgRed shadow-lg box-border p-1 rounded-lg"
        >
          Add to 🛒
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
