import React, { useState } from "react";

function Ingredients({
  handleSelectItem,
  handleRemoveItem,
  ingredients,
  selected,
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
          {/* <p>Toppig Price: {calTotalPrice()}</p> */}
          {Object.keys(ingredients).map((ing) => (
            <div key={ing} className="toppings">
              <button
                disabled={!selected[ing]}
                onClick={() => handleRemoveItem(ing)}
              >
                -
              </button>
              <p>
                {ing}: {selected[ing]} - ₹{" "}
                {selected[ing] ? selected[ing] * ingredientsPrice[ing] : 0}
              </p>
              <button onClick={() => handleSelectItem(ing)}>+</button>
            </div>
          ))}
        </div>
      )}
      <div className="customizeBttnDiv">
        <button
          className=" border-solid border-2 border-WelCaTxt text-txtColor bg-bgRed shadow-lg box-border p-1 rounded-lg"
          onClick={toggleIngredients}
        >
          <span className="customEmojii">👨‍🍳</span>
        </button>
      </div>
    </div>
  );
}

export default Ingredients;
