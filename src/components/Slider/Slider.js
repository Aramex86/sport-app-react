import React from 'react';
import Slider from "react-slick";
import { NavLink } from 'react-router-dom';

const Carousel =(props)=> {
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
            <div className="slider__wrapp">
                <Slider {...settings}>
                    <div>
                        <div className="slider__wrapp-first">
                            <div className="slider__wrapp-first-intro">
                                <ul className="slider__wrapp-first-intro-list">
                                   <li className="slider__wrapp-first-intro-list-item1">Starting From $ 599.00</li>
                                   <li className="slider__wrapp-first-intro-list-item2">Big <span>Discount</span> In</li>
                                   <li className="slider__wrapp-first-intro-list-item3">New Arival Items</li>
                                   <NavLink to='/newarival' className="slider__wrapp-first-intro-link">Shop now</NavLink>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="slider__wrapp-second">
                            <div className="slider__wrapp-second-intro">
                                <ul className="slider__wrapp-first-intro-list">
                                    <li className="slider__wrapp-first-intro-list-item1">Starting From $ 799.00</li>
                                    <li className="slider__wrapp-first-intro-list-item2">Amaizing <span>Sale</span> Bikes</li>
                                    <li className="slider__wrapp-first-intro-list-item3">Rider  All Accessories</li>
                                    <NavLink to='/rideraccesories'className="slider__wrapp-first-intro-link">Shop now</NavLink>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="slider__wrapp-third">
                            <div className="slider__wrapp-third-intro">
                                <ul className="slider__wrapp-first-intro-list">
                                   <li className="slider__wrapp-first-intro-list-item1">Starting From $ 290.00</li>
                                   <li className="slider__wrapp-first-intro-list-item2">Latest  <span>Winter</span> Sale</li>
                                   <li className="slider__wrapp-first-intro-list-item3">Find The Best Brands</li>
                                   <NavLink to='/brands'className="slider__wrapp-first-intro-link">Shop now</NavLink>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }    

export default Carousel;