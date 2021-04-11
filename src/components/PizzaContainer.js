import React, {useState} from 'react'
import Buttons from './Buttons'
import ImageSlider from './ImageSlider'
import WelcomeCard from './WelcomeCard'
import { ImageSliderData } from './ImageSliderData'
// import { Switch,  Route,} from "react-router-dom";
// import Cart from './Cart';



function PizzaContainer() {

    const [current, setCurrent] = useState(0);
  const length = ImageSliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

    return (
      <div>
          <WelcomeCard/>
        <div className="mx-auto block  justify-center w-boxWidth  h-boxHeight  my-3.5" >
            <ImageSlider slides={ImageSliderData} nextSlide={nextSlide} prevSlide={prevSlide} current={current}/>
            <Buttons current={current}/>

            {/* <Switch>
              <Route exact path = "/cart">
                      <Cart />
              </Route>
            </Switch> */}
            
        </div>
      </div>
    )
}

export default PizzaContainer
