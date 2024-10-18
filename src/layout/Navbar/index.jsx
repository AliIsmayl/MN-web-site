import React, { useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import "./Navbar.scss";
import { Link as ScrollLink } from "react-scroll";
import Logo from "../../../img/Logo.png";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [openNavbar, setOpenNavbar] = useState(false);

  function handleOpenNavbar() {
    setOpenNavbar(!openNavbar);
  }
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="allNavbar">
      <nav>
        <div className="iconBox">
          <img src={Logo} alt="" />
        </div>
        <ul>
          <ul>
            <ScrollLink to="Home" smooth={true} duration={500} offset={-50}>
              <li>Home</li>
            </ScrollLink>
            <ScrollLink to="About" smooth={true} duration={500} offset={-50}>
              <li>About</li>
            </ScrollLink>
            <ScrollLink to="Service" smooth={true} duration={500} offset={-50}>
              <li>Service</li>
            </ScrollLink>
            <ScrollLink to="Contact" smooth={true} duration={500} offset={-50}>
              <li>Contact Us</li>
            </ScrollLink>
          </ul>
        </ul>
        <div className="menuBox" onClick={handleOpenNavbar}>
          <p>
            {openNavbar ? (
              <IoMdClose style={{ fontSize: "40px" }} />
            ) : (
              <IoMdMenu style={{ fontSize: "40px" }} />
            )}
          </p>
        </div>
        <div className={`respNavbar ${openNavbar ? "openNavbar" : ""}`}>
          <ul>
            <ul>
              <ScrollLink
                onClick={handleOpenNavbar}
                to="Home"
                smooth={true}
                duration={500}
                offset={-50}
              >
                <li>Home</li>
              </ScrollLink>
              <ScrollLink
                onClick={handleOpenNavbar}
                to="About"
                smooth={true}
                duration={500}
                offset={-50}
              >
                <li>About</li>
              </ScrollLink>
              <ScrollLink
                onClick={handleOpenNavbar}
                to="Service"
                smooth={true}
                duration={500}
                offset={-50}
              >
                <li>Service</li>
              </ScrollLink>
              <ScrollLink
                onClick={handleOpenNavbar}
                to="Contact"
                smooth={true}
                duration={500}
                offset={-50}
              >
                <li>Contact Us</li>
              </ScrollLink>
            </ul>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
