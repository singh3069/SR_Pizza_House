import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import {Link } from 'react-router-dom'
import {useCart} from '../HOC/Hoc'



function NavBar() {
  const items = useCart();
    return (
      <div>
        <nav className=" flex items-center justify-between bg-bgRed text-5xl rounded-b-xl p-3 shadow-md sticky ">
          <Link to="/">
            <h1 className="text-txtColor"> SR Pizza House 🍕</h1>
          </Link>

          <Link to="/cart" className="cartIconCartCount">
            <FontAwesomeIcon
              icon={faShoppingBasket}
              className="cursor-pointer"
            />
            <p className=" text-txtColor">{items.length}</p>
          </Link>
        </nav>
      </div>
    );
}

export default NavBar


