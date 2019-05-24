import React from "react";
import { NavLink } from "react-router-dom";

// The Header creates links that can be used to navigate
// between routes.
class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="active1">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/list" activeClassName="active1">
                List
              </NavLink>
            </li>
            <li>
              <NavLink to="/schedule" activeClassName="active1">
                Schedule
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active1">
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
