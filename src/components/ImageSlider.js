import { ImageSliderData } from "./ImageSliderData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleRight,
  faChevronCircleLeft,
} from "@fortawesome/free-solid-svg-icons";

const ImageSlider = ({ prevSlide, nextSlide, current }) => {
  return (
    <section className="slider">
      <FontAwesomeIcon
        icon={faChevronCircleLeft}
        className="left-arrow"
        onClick={prevSlide}
      />
      <FontAwesomeIcon
        icon={faChevronCircleRight}
        className="right-arrow"
        onClick={nextSlide}
      />
      {ImageSliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <div className="mx-auto pizza-name-box bg-WelCaTxt block justify-center  my-3.5">
                <img src={slide.imageUrl} alt="pizzaImage" className="image" />
                <h1 className="pizza-name">{slide.pizzaName}</h1>
                <p className="price-nd-size">
                  <span>{slide.size}</span> <span>₹{slide.price}</span>
                </p>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
