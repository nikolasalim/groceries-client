import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <span>
          <Link to="/">LOGO</Link>
        </span>
        <span>MENU</span>
      </div>
    );
  }
}

export default NavBar;
