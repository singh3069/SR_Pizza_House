import React  from 'react'
import { ImageSliderData } from './ImageSliderData';
import { Switch,  Route,} from "react-router-dom";
import Cart from './Cart';



function Buttons({current}) {
    
        function cart () {
            console.log(ImageSliderData[current])
    }
    
    


    return (
        <div>
        <div className="buttons">
            <button onClick={cart} className=" border-solid border-2 border-WelCaTxt text-txtColor bg-bgRed shadow-lg box-border p-1 rounded-lg">Add to 🛒</button>

            
            <button  className=" border-solid border-2 border-WelCaTxt text-txtColor bg-bgRed shadow-lg box-border p-1 rounded-lg">Customize Your 
            Pizza👨‍🍳</button>

        </div>
        {/* <Switch>
                <Route exact path ="/cart">
                        <Cart/>
                </Route>
      </Switch> */}
            
</div>

        
    )
}

export default Buttons
