import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.scss";

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1
  };

  return (
    <div className="slider-wrapper">
      <Slider {...settings}>
        <div>
          <img src="https://deti.kg/images/partners-logo/18.jpg" alt="" />
        </div>
        <div>
          <img src="https://deti.kg/images/partners-logo/27.jpg" alt="" />
        </div>
        <div>
          <img src="https://deti.kg/images/partners-logo/28.jpg" alt="" />
        </div>
        <div>
          <img src="https://deti.kg/images/partners-logo/29.jpg" alt="" />
        </div>
        <div>
          <img src="https://deti.kg/images/partners-logo/8.jpg" alt="" />
        </div>
        <div>
          <img src="https://deti.kg/images/partners-logo/11.jpg" alt="" />
        </div>
        <div>
          <img src="https://deti.kg/images/partners-logo/43.jpg" alt="" />
        </div>
        <div>
          <img src="https://deti.kg/images/partners-logo/34.jpg" alt="" />
        </div>
        <div>
          <img src="https://deti.kg/images/partners-logo/38.jpg" alt="" />
        </div>
        <div>
          <img src="https://deti.kg/images/partners-logo/kdkulikov.png" alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;