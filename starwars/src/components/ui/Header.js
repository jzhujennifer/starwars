import React from "react";
import logo from "../../img/starwarlogo.jpeg"

const Header = () => {
  return (
    <header className="center">
      <img src={logo} alt="" />
    </header>
  );
};

export default Header;