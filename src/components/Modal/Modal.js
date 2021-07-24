import React from "react";
import "./modal.css"
// import { useCart, useDispatchCart } from "../../HOC/Hoc";



function Modal(props) {
  const { closeHandler, totalPrice } = props;
  
  return (
    <div className="modalMainDiv">
      <span onClick={closeHandler} className="closeBtn"></span>
      <form className="detailForm">
        <label>
          First Name:
          <input type="text" className="detailFormInputs" required />
        </label>
        <label>
          Last Name:
          <input type="text" className="detailFormInputs" required />
        </label>
        <label>
          Address:
          <input type="text" className="detailFormInputs" required />
        </label>
        <label>
          Email:
          <input type="email" className="detailFormInputs" required />
        </label>
        <label>
          Pincode:
          <input type="number" className="detailFormInputs" required />
        </label>
        <p>Total price: ₹{totalPrice}</p>
        <button className="confirmOrderBttn">Confirm Order</button>
      </form>
    </div>
  );
}

export default Modal

