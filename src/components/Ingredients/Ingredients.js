import React, { useState } from "react";

function Ingredients({
  addIngredients,
  removeIngredients,
  ingredientsQuantity,
  ingredientsPrice,
}) {
  const [showIngredient, setShowIngredient] = useState(false);

  function toggleIngredients() {
    setShowIngredient(!showIngredient);
  }

  return (
    <div>
      {showIngredient && (
        <div className="ingredients">
          <u>
            <h3>Extra Ingrdents</h3>
          </u>

          <div className="toppings">
            <button onClick={() => removeIngredients("tomato")}>-</button>
            <span>
              🍅 {ingredientsQuantity.tomato}, ₹
              {ingredientsPrice.tomato * ingredientsQuantity.tomato}
            </span>
            <button onClick={() => addIngredients("tomato")}>+</button>
          </div>

          {/* --------------------------------------------------------------------- */}
          <div className="toppings">
            <button onClick={() => removeIngredients("cheese")}>-</button>
            <span>
              🧀 {ingredientsQuantity.cheese}, ₹
              {ingredientsPrice.cheese * ingredientsQuantity.cheese}
            </span>
            <button onClick={() => addIngredients("cheese")}>+</button>
          </div>

          {/* --------------------------------------------------------------------- */}

          <div className="toppings">
            <button onClick={() => removeIngredients("mushroom")}>-</button>
            <span>
              🍄 {ingredientsQuantity.mushroom}, ₹
              {ingredientsPrice.mushroom * ingredientsQuantity.mushroom}
            </span>
            <button onClick={() => addIngredients("mushroom")}>+</button>
          </div>

          {/* --------------------------------------------------------------------- */}

          <div className="toppings">
            <button onClick={() => removeIngredients("chilli")}>-</button>
            <span>
              🌶 {ingredientsQuantity.chilli}, ₹
              {ingredientsPrice.chilli * ingredientsQuantity.chilli}
            </span>
            <button onClick={() => addIngredients("chilli")}>+</button>
          </div>
        </div>
      )}
      <div className="customizeBttnDiv">
        <button
          className=" border-solid border-2 border-WelCaTxt text-txtColor bg-bgRed shadow-lg box-border p-1 rounded-lg"
          onClick={toggleIngredients}
        >
          👨‍🍳
        </button>
      </div>
    </div>
  );
}

export default Ingredients;
