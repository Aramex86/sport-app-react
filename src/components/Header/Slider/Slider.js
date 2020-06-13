import React from 'react';
import Slider from "react-slick";
import slide1 from "../../../assets/slider/slide1.jpg";
import slide2 from "../../../assets/slider/slide2.jpg";
import slide3 from "../../../assets/slider/slide3.jpg";

class Carousel extends React.Component {

    render(){
        const settings ={
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            pauseOnHover:true,
            cssEase: "linear"
          };
          return (
            <div className="slider-wrapp">
                <Slider {...settings}>
                    <div>
                        <img src={slide1} alt="slide"/>
                    </div>
                    <div>
                        <img src={slide2} alt="slide"/>
                    </div>
                    <div>
                        <img src={slide3} alt="slide"/>
                    </div>
                </Slider>
            </div>
        );
    }

    
    
};

export default Carousel;