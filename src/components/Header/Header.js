import React from 'react';
import HeaderTop from './Header-Top/Header-top';
import HeaderBottom from './Header-bottom/Header-bottom';
import Carousel from './Slider/Slider';

const Header = (props) => {
    return (
        <header className="header-wrapp">
            <HeaderTop/>
            <HeaderBottom/>
            <Carousel/>
        </header>
    );
};

export default Header;