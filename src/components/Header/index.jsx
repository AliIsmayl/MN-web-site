import React from "react";
import "./Header.scss";
import Image from '../../../img/BiggerImage.png'
function Header() {
  return (
    <header style={{ backgroundImage: `url(${Image})` }}>
      <h1>International Consulting and IT Services</h1>
      <div className="line"></div>
      <p>
        We provide innovative technology solutions that streamline operations
        and enable business growth. Our customized IT services focus on
        scalability, performance and security to maximize your success.
      </p>
    </header>
  );
}

export default Header;
