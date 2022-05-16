import { React, useState } from "react";
import { useCart, useDispatchCart } from "../HOC/Hoc";
import Modal from "./Modal/Modal";
import Ingredients from "./Ingredients/Ingredients";
import { ToastContainer, toast } from "react-toastify";

const ingredientsPrice = {
  tomato: 10,
  cheese: 10,
  mushroom: 15,
  chilli: 5,
};

const ingredients = {
  tomato: 0,
  cheese: 0,
  mushroom: 0,
  chilli: 0,
};

const CartItem = ({
  product,
  index,
  handleRemove,
  handleSelectItem,
  handleRemoveItem,
  calTotalPrice,
  selected,
}) => {
  console.log(product.toppingPrice);
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
            <br />
            Toppings:- <strong>₹{product.toppingPrice}</strong>
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
        handleSelectItem={handleSelectItem}
        handleRemoveItem={handleRemoveItem}
        ingredients={ingredients}
        selected={selected}
        ingredientsPrice={ingredientsPrice}
      />
    </div>
  );
};

export default function Store() {
  const [modalState, setModalState] = useState(false);
  const [selected, setSelected] = useState({ ...ingredients });

  // new ---------------
  const handleSelectItem = (ing) => {
    // console.log("4", ing);
    setSelected((prev) => ({
      ...prev,
      [ing]: prev[ing] + 1,
    }));
  };

  const handleRemoveItem = (ing) => {
    if (selected[ing]) {
      setSelected((prev) => ({
        ...prev,
        [ing]: prev[ing] - 1,
      }));
    }
  };

  const calTotalPrice = () => {
    const priceArr = Object.keys(selected).map(
      (ing) => selected[ing] * ingredientsPrice[ing]
    );
    const total = priceArr.reduce((prev, curr) => prev + curr, 0);
    // console.log(total);
    return total;
  };

  // -------------------------------------
  const data = useCart();
  const items = data.map((item) => ({
    ...item,
    toppingPrice: calTotalPrice(),
  }));

  const dispatch = useDispatchCart();

  console.log({ items });

  const price = items.reduce((total, { price = 0 }) => total + price, 0);
  const priceWithToppings = items.reduce(
    (total, { toppingPrice = 0 }) => total + toppingPrice,
    0
  );
  const totalPrice = price + priceWithToppings;
  console.log({ totalPrice });
  // console.log(items.toppingPrice);
  const openFormModalHandler = () => {
    setModalState(true);
  };

  const closeFormModalHandler = () => {
    setModalState(false);
  };

  const handleRemove = (index) => {
    dispatch({ type: "REMOVE", index });
  };

  const notify = () => {
    // closeFormModalHandler();
    setTimeout(() => {
      toast("Wow so easy !");
    }, 100);
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
            calTotalPrice={calTotalPrice}
            handleSelectItem={handleSelectItem}
            handleRemoveItem={handleRemoveItem}
            selected={selected}
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
          notify={notify}
        />
      )}
      <ToastContainer />
    </div>
  );
}
