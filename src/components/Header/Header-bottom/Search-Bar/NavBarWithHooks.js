import React, { useState } from "react";
import Icon from "../../../common/Icons";
import { NavLink } from "react-router-dom";

const NavBarWithHooks = () => {
  const [onMenu, setOnMenu] = useState(true);

  const showMenu = () => {
    if (onMenu === false) {
      setOnMenu(true);
    } else {
      setOnMenu(false);
    }
  };

  return (
    <div>
      <div className="searchbar__nav" onClick={showMenu}>
        <span className="searchbar__nav-name">Shop By Category</span>
        <span className="line"></span>
        <div className={onMenu ? "hide" : "searchbar__nav-menu"}>
          <ul className="nav-list">
            <li className="nav-list-item">
              <NavLink to="/Sports Aceessories" className="nav-list-link">
                Sports Aceessories <Icon icon="chevron-down" size={10} />
              </NavLink>
            </li>
            <li className="nav-list-item">
              <NavLink to="/Biribol" className="nav-list-link">
                Biribol <Icon icon="chevron-down" size={10} />
              </NavLink>
            </li>
            <li className="nav-list-item">
              <NavLink to="/Badminton" className="nav-list-link">
                Badminton
              </NavLink>
            </li>
            <li className="nav-list-item">
              <NavLink to="/Air Racing" className="nav-list-link">
                Air Racing
              </NavLink>
            </li>
            <li className="nav-list-item">
              <NavLink to="/Air Racing" className="nav-list-link">
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBarWithHooks;

//<Icons icon="search"/>
