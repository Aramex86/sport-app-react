import React from 'react';
import HeaderTop from './Header-top/Header-top';
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