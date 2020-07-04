import React from "react";
import Icon from "../../../common/Icons";
import { NavLink } from "react-router-dom";

class NavBar extends React.Component {
  state = {
    onMenu: true,
  };

  showMenu = () => {
    if (this.state.onMenu == false) {
      this.setState({
        onMenu: true,
      });
    } else {
      this.setState({
        onMenu: false,
      });
    }
  };

  render() {
    return (
      <div>
        <div className="searchbar__nav" onClick={this.showMenu}>
          <span className="searchbar__nav-name">Shop By Category</span>
          <span className="line"></span>
          <div className={this.state.onMenu ? "hide" : "searchbar__nav-menu"}>
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
  }
}

export default NavBar;

//<Icons icon="search"/>
