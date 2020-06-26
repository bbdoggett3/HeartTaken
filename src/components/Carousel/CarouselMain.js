import React, { Component } from "react";
import "./CarouselMain.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AboutCarousel from './AboutCarousel';
import FeatCarousel from './FeatCarousel';
import ContactCarousel from './ContactCarousel';

function ArrowButton(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        backgroundColor: "#00c8f8",
        borderRadius: "10px",
        // margin: "10px",
      }}
      onClick={onClick}
    />
  );
}

class App extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      arrows: true,
      slidesToScroll: 1,
      className: "slides",
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      cssEase: "linear",
      nextArrow: <ArrowButton />,
      prevArrow: <ArrowButton />,
      appendDots: (dots) => (
        <div
          style={{
            borderRadius: "10px",
            
          }}
        >
          <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
      ),
    };
    return (
      <div className="Carousel-App" style={{ padding: 100 }}>
        <Slider {...settings}>
          <div>
            <FeatCarousel />
          </div>
          <div>
            <AboutCarousel />
          </div>
          <div>
            <ContactCarousel />
          </div>
        </Slider>
      </div>
    );
  }
}

export default App;