import React from "react";
import {useCart , useDispatchCart} from '../HOC/Hoc'

const CartItem = ({ product, index, handleRemove }) => {
  return (
    
      <div className="">
        <div className="">
          <img src={product.imageUrl} className="" alt="Product" />
        </div>
        <div className="">
          <h2 className="">{product.pizzaName}</h2>
          <h2>{product.size}</h2>
          <div className=""> 
            <p> Price :- <strong>{product.price}</strong></p>
          </div>
          <button onClick={() => handleRemove(index)}>Remove from cart</button>
        </div>
      </div>
  );
};

export default function Store() {
  const items = useCart();
  const dispatch = useDispatchCart();
  const totalPrice = items.reduce((total, b) => total + b.price, 0);

  const handleRemove = (index) => {
    dispatch({ type: "REMOVE", index });
  };
  
  if (items.length === 0) {
    return (
      <main>
        <p>Cart is empty</p>
      </main>
    );
  }
  return (
    <main>
      <p>
        Total price:{" "}{totalPrice}
      </p>
      {items.map((item, index) => (
        <CartItem
          handleRemove={handleRemove}
          key={index}
          product={item}
          index={index}
        />
      ))}
    </main>
  );
}



















// function Cart() {

  
//   return (
//     <div>
//       <h1>welcome to Cart</h1>
//       {/* <div>
//         {itemsInCart &&
//           itemsInCart.map((cItems) => {
//             return `
//                   <div key = ${cItems.id}> 
//                   <h1> ${cItems.name} </h1>
//                   </div>
//                   `;
//           })}
//       </div> */} 
//     </div>
//   );
// }

// export default Cart;
