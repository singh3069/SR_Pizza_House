import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from '../App'
import Cart from './Cart'
import PizzaContainer from './PizzaContainer'

const Routes = () => {
    return (
        <BrowserRouter>
        {/* <App> */}
            <Switch>

            <Route path="/cart">
                    <Cart/>
                </Route>

                <Route path="/" exact>
                    <PizzaContainer/>
                </Route>
                
            </Switch>
        {/* </App> */}
        </BrowserRouter>

    )
}

export default Routes
