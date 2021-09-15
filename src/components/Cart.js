import { React, useState, useEffect } from "react";
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
  toppingPrice,
  addIngredients,
  removeIngredients,
  ingredientsQuantity,
}) => {
  // const [toppinPrice, setToppingPrice] = useState(0);

  // const addIngredients = (topping) => {
  //   setIngredientsQuantity((prev) => ({
  //     ...prev,
  //     [topping]: prev[topping] + 1,
  //   }));
  //   setToppingPrice(ingredientsPrice[topping] * ingredientsQuantity[topping]);

  //   // setTimeout(() => {
  //   //   const toppingTotal =
  //   //     ingredientsPrice[topping] * ingredientsQuantity[topping];
  //   // }, 100);
  // };

  // const removeIngredients = (topping) => {
  //   if (ingredientsQuantity[topping] > 0) {
  //     setIngredientsQuantity((prev) => ({
  //       ...prev,
  //       [topping]: prev[topping] - 1,
  //     }));
  //     setToppingPrice(ingredientsPrice[topping] * ingredientsQuantity[topping]);
  //   }
  // };

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
            Price :-{" "}
            <strong>
              ₹{product.price}+{toppingPrice}
            </strong>
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
        ingredientsPrice={ingredientsPrice}
        ingredientsQuantity={ingredientsQuantity}
      />
    </div>
  );
};

export default function Store() {
  const [modalState, setModalState] = useState(false);
  const [selected, setSelected] = useState({ ...ingredients });
  // ---------
  const [ingredientsQuantity, setIngredientsQuantity] = useState(ingredients);
  const [toppingPrice, setToppingPrice] = useState("");

  const addIngredients = (topping) => {
    setIngredientsQuantity((prev) => ({
      ...prev,
      [topping]: prev[topping] + 1,
    }));

    setToppingPrice(ingredientsPrice[topping] * ingredientsQuantity[topping]);
  };

  // useEffect(
  //   (topping) => {
  //     setTimeout(() => {
  //       setToppingPrice(
  //         ingredientsPrice[topping] * ingredientsQuantity[topping]
  //       );
  //     }, 100);
  //   },
  //   [ingredientsQuantity]
  // );

  const removeIngredients = (topping) => {
    if (ingredientsQuantity[topping] > 0) {
      setIngredientsQuantity((prev) => ({
        ...prev,
        [topping]: prev[topping] - 1,
      }));
    }

    setToppingPrice(ingredientsPrice[topping] * ingredientsQuantity[topping]);
  };

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
    console.log(priceArr);
    const total = priceArr.reduce((prev, curr) => prev + curr, 0);
    console.log(total);
    return total;
  };
  // -------------------------------------
  const items = useCart();
  const dispatch = useDispatchCart();
  const totalPrice = items.reduce(
    (total, { price = 0 }) => total + price + toppingPrice,
    0
  );

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
            toppingPrice={toppingPrice}
            handleSelectItem={handleSelectItem}
            handleRemoveItem={handleRemoveItem}
            ingredientsQuantity={ingredientsQuantity}
          />
        ))}
      </div>

      <div className="priceNdOrderBttn">
        <p className="totalPrice">
          Total price: ₹{totalPrice} + {calTotalPrice()}
        </p>
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

// setTimeout(() => {
//   setToppingPrice(ingredientsPrice[topping] * ingredientsQuantity[topping]);
// }, 100);
