import React, { useState } from "react";

const ingredentsPrice = {
    
}

function Ingredents() {
//   const [ingredentsPrice, setIngredentsPrice] = useState([0, 0, 0, 0]);
    const [ingredentsQuantity, setIngredentsQuantity] = useState({
    tomato: 0,
    cheese: 0,
    capcicum: 0,
    chilli: 0,
  });

  const addIngredents = (topping) => {
    //   setIngredentsPrice((prevIngredentsPrice) => prevIngredentsPrice + 30);
    setIngredentsQuantity((prev) => ({
      ...prev,
      [topping]: prev[topping] + 1,
    }));
  };

  const removeIngredents = (topping) => {
    if (ingredentsPrice > 0) {
      // setIngredentsPrice((prevIngredentsPrice) => prevIngredentsPrice - 30);
      setIngredentsQuantity((prev) => ({
        ...prev,
        [topping]: prev[topping] - 1,
      }));
    }
  };
  return (
    <div className="ingredents">
      <h4>Extra Ingrdents</h4>
      <div className="tomato">
        <button onClick={() => removeIngredents("tomato")}>-</button>
        <span>
          Tomato {ingredentsQuantity.tomato} :₹{ingredentsPrice}
        </span>
        <button onClick={() => addIngredents("tomato")}>+</button>
      </div>
      {/* <div className="tomato">
        <button id="2" onClick={(e) => removeIngredents(e)}>
          -
        </button>
        <span>
          Cheese{ingredentsQuantity} :₹{ingredentsPrice}
        </span>
        <button id="2" onClick={(e) => addIngredents(e)}>
          +
        </button>
      </div>
      <div className="tomato">
        <button id="3" onClick={(e) => removeIngredents(e)}>
          -
        </button>
        <span>
          Capcicum {ingredentsQuantity} :₹{ingredentsPrice}
        </span>
        <button id="3" onClick={(e) => addIngredents(e)}>
          +
        </button>
      </div>
      <div className="tomato">
        <button id="4" onClick={(e) => removeIngredents(e)}>
          -
        </button>
        <span>
          Chilli {ingredentsQuantity} :₹{ingredentsPrice}
        </span>
        <button id="4" onClick={(e) => addIngredents(e)}>
          +
        </button>
      </div> */}
    </div>
  );
}

export default Ingredents;
