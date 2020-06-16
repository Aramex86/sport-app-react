import React from 'react';
import HeaderTop from './Header-Top/Header-top';
import HeaderBottom from './Header-bottom/Header-bottom';
import CarouselContainer from '../Slider/SliderContainer';

const Header = (props) => {
    return (
        <header className="header-wrapp">
            <HeaderTop/>
            <HeaderBottom/>
            <CarouselContainer/>
        </header>
    );
};

export default Header;