import React from "react";
import "./LetsWorkSection.scss";
import { MdOutlineMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

function LetsWorkSection() {
  return (
    <section id="letsWorkSection">
      <h1>Contact Us</h1>
      <p>
        We provide innovative technology solutions that streamline operations
        and enable business growth. Our customized IT services focus on
        scalability, performance and security to maximize your success.
      </p>
      <div className="normalBox">
          <div className="iconBox">
            <div className="icon">
              <MdOutlineMail />
            </div>
            <p>office@mnicit.az</p>
          </div>
          <div className="iconBox">
            <div className="icon">
              <FaPhone />
            </div>
            <p>050 997 84 61</p>
          </div>
        </div>
    </section>
  );
}

export default LetsWorkSection;
