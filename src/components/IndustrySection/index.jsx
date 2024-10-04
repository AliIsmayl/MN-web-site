import React from "react";
import "./IndustrySection.scss";
import { LiaBoxSolid } from "react-icons/lia";
import { FaArrowRight } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { LuPlane } from "react-icons/lu";
import { RiGraduationCapFill } from "react-icons/ri";

function IndustrySection() {
  return (
    <section id="industrySection">
      <div className="upBox">
        <span>Service</span>
        <h3>Innovative Solutions. Reliable Support</h3>
        <p>
          At ITlock, we provide a wide range of IT solutions designed to
          optimize your business operations. From system integration and network
          management to IT support, we keep your technology running smoothly and
          efficiently so you can focus on growing.
        </p>
      </div>
      <div className="downBox">
        <div className="cart">
          <div className="hoverBox"></div>

          <div className="icon">
            <LiaBoxSolid />
          </div>
          <p>Industries & Manufacturing</p>
        </div>
        <div className="cart">
          <div className="hoverBox"></div>

          <div className="icon">
            <IoCartOutline />
          </div>
          <p>Industries & Manufacturing</p>
        </div>
        <div className="cart">
          <div className="hoverBox"></div>

          <div className="icon">
            <LuPlane />
          </div>
          <p>Industries & Manufacturing</p>
        </div>
        <div className="cart">
          <div className="hoverBox"></div>

          <div className="icon">
            <RiGraduationCapFill />
          </div>
          <p>Industries & Manufacturing</p>
        </div>
      </div>
    </section>
  );
}

export default IndustrySection;
