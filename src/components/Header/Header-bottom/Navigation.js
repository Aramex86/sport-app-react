import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = (props) => {
    return (
        <nav className="navigation-wrapp">
           <ul className="nav-list">
                <li className="nav-list-item">
                    <NavLink to="/Sports Aceessories" className="nav-list-link">Sports Aceessories</NavLink>
                </li>
                <li className="nav-list-item">
                    <NavLink to="/Biribol" className="nav-list-link">Biribol</NavLink>
                </li>
                <li className="nav-list-item">
                    <NavLink to="/Badminton" className="nav-list-link">Badminton</NavLink>
                </li>
                <li className="nav-list-item"> 
                <NavLink to="/Air Racing" className="nav-list-link">Air Racing</NavLink>
                </li>
                <li className="nav-list-item">
                     <NavLink to="/Air Racing" className="nav-list-link">Blog</NavLink>
                </li>
            </ul>   
        </nav>
    );
};

export default Navigation;