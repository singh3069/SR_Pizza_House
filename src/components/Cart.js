import { React, useState } from "react";
import { useCart, useDispatchCart } from "../HOC/Hoc";
import Modal from "./Modal/Modal";
import Ingredients from "./Ingredients/Ingredients";
// import Alert from "@material-ui/core/alert";

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

const CartItem = ({ product, index, handleRemove }) => {
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
    // console.log(setIngredientsQuantity);
  };

  return (
    <div className="pizzaImageDetail">
      <div className="cartImgDiv">
        <img src={product.imageUrl} className="cartImg" alt="Product" />
      </div>
      <div className="cartPizzaDetails">
        <div>
          <h2>
            <u>{product.pizzaName}</u>
          </h2>
          <h2>{product.size}</h2>
          <p>
            {" "}
            Price :- <strong>₹{product.price}</strong>
          </p>
        </div>
        <button
          className="removeFromCartBttn"
          onClick={() => handleRemove(index)}
        >
          Remove
        </button>
      </div>
      <Ingredients
        addIngredients={addIngredients}
        removeIngredients={removeIngredients}
        ingredientsQuantity={ingredientsQuantity}
        ingredientsPrice={ingredientsPrice}
      />
    </div>
  );
};

export default function Store() {
  const [modalState, setModalState] = useState(false);

  const items = useCart();
  const dispatch = useDispatchCart();
  const totalPrice = items.reduce((total, { price = 0 }) => total + price, 0);

  const openFormModalHandler = () => {
    setModalState(true);
  };

  const closeFormModalHandler = () => {
    setModalState(false);
  };

  const handleRemove = (index) => {
    dispatch({ type: "REMOVE", index });
  };

  const abc = () => {
    // closeFormModalHandler();
  };

  if (items.length === 0) {
    return (
      <div className="emptyCartMsz">
        <p>Cart is empty</p>
      </div>
    );
  }

  return (
    <div className="cartItemsDiv">
      <div className="pizzaDetailDiv">
        {items.map((item, index) => (
          <CartItem
            handleRemove={handleRemove}
            key={index}
            product={item}
            index={index}
          />
        ))}
      </div>

      <div className="priceNdOrderBttn">
        <p className="totalPrice">Total price: ₹{totalPrice}</p>
        <br />
        <button className="placeOrderBttn" onClick={openFormModalHandler}>
          Place Order
        </button>
      </div>
      {modalState && (
        <Modal
          closeHandler={closeFormModalHandler}
          totalPrice={totalPrice}
          abc={abc}
        />
      )}
    </div>
  );
}
