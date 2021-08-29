import React, { useState } from "react";

var ingredientsPrice = {
  tomato: 10,
  cheese: 10,
  mushroom: 15,
  chilli: 5,
};

var ingredients = {
  tomato: 0,
  cheese: 0,
  mushroom: 0,
  chilli: 0,
};

function Ingredients() {
  const [ingredientsQuantity, setIngredientsQuantity] = useState(ingredients);

  const addIngredients = (topping) => {
    setIngredientsQuantity((prev) => ({
      ...prev,
      [topping]: prev[topping] + 1,
    }));
  };

  const removeIngredients = (topping) => {
    // if (ingredentsQuantity > 0) {
    setIngredientsQuantity((prev) => ({
      ...prev,
      [topping]: prev[topping] - 1,
    }));
    // }
  };
  return (
    <div className="ingredients">
      <h4>Extra Ingrdents</h4>

      <div className="">
        <button onClick={() => removeIngredients("tomato")}>-</button>
        <span>
          🍅 {ingredientsQuantity.tomato}, ₹
          {ingredientsPrice.tomato * ingredientsQuantity.tomato}
        </span>
        <button onClick={() => addIngredients("tomato")}>+</button>
      </div>

      {/* --------------------------------------------------------------------- */}
      <div className="">
        <button onClick={() => removeIngredients("cheese")}>-</button>
        <span>
          🧀 {ingredientsQuantity.cheese}, ₹
          {ingredientsPrice.cheese * ingredientsQuantity.cheese}
        </span>
        <button onClick={() => addIngredients("cheese")}>+</button>
      </div>

      {/* --------------------------------------------------------------------- */}

      <div className="">
        <button onClick={() => removeIngredients("mushroom")}>-</button>
        <span>
          🍄 {ingredientsQuantity.mushroom}, ₹
          {ingredientsPrice.mushroom * ingredientsQuantity.mushroom}
        </span>
        <button onClick={() => addIngredients("mushroom")}>+</button>
      </div>

      {/* --------------------------------------------------------------------- */}

      <div className="">
        <button onClick={() => removeIngredients("chilli")}>-</button>
        <span>
          🌶 {ingredientsQuantity.chilli}, ₹
          {ingredientsPrice.chilli * ingredientsQuantity.chilli}
        </span>
        <button onClick={() => addIngredients("chilli")}>+</button>
      </div>
    </div>
  );
}

export default Ingredients;
