import React from 'react';
import HeaderTop from './Header-top';
import HeaderBottom from './Header-bottom';

const Header = (props) => {
    return (
        <header className="header-wrapp">
            <HeaderTop/>
            <HeaderBottom/>
        </header>
    );
};

export default Header;