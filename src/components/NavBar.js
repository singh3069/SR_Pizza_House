// import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import {Link , BrowserRouter as Router } from 'react-router-dom'
// import { Switch,  Route,} from "react-router-dom";
// import Cart from './Cart';



function NavBar() {

    // const [activeCart, setActiveCart] = useState[0]

    // const openModel = () =>{

    // }
    

    return (
      <div>
        <nav className=" flex items-center justify-between bg-bgRed text-5xl rounded-b-xl p-3 shadow-md sticky ">
            <Link to="/">
              <h1 className="text-txtColor"> SR Pizza House 🍕</h1>
            </Link>

            <Link to="/cart">
              <FontAwesomeIcon
                icon={faShoppingBasket}
                className="cursor-pointer"
              />
            </Link>
        </nav>

        {/* <Switch>
                <Route exact path ="/cart">
                        <Cart/>
                </Route>
      </Switch> */}
      </div>
    );
}

export default NavBar



