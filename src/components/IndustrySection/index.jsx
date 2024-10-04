import React from 'react'
import './IndustrySection.scss'
import { LiaBoxSolid } from "react-icons/lia";
import { FaArrowRight } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { LuPlane } from "react-icons/lu";
import { RiGraduationCapFill } from "react-icons/ri";

function IndustrySection() {
  return (
    <section id='industrySection'>
 <div className="upBox">
 <span>INDUSTRY WE OFFER</span>
      <h3>Managed IT services customized for your industry</h3>
      <p>We understand the complexities of modern markets and translate them into real business solutions for automotive, financial, insurance, pharma & life sciences,</p>
 </div>
 <div className="downBox">
  <div className="cart">
  <div className="hoverBox"></div>

  <div className="icon"><LiaBoxSolid /></div>
  <p>Industries & Manufacturing</p>
  <button>Find Out More <FaArrowRight /></button>
  </div>
  <div className="cart">
  <div className="hoverBox"></div>

  <div className="icon"><IoCartOutline /></div>
  <p>Industries & Manufacturing</p>
  <button>Find Out More <FaArrowRight /></button>
  </div>
  <div className="cart">
  <div className="hoverBox"></div>

  <div className="icon"><LuPlane /></div>
  <p>Industries & Manufacturing</p>
  <button>Find Out More <FaArrowRight /></button>
  </div>
  <div className="cart">
  <div className="hoverBox"></div>

  <div className="icon"><RiGraduationCapFill /></div>
  <p>Industries & Manufacturing</p>
  <button>Find Out More <FaArrowRight /></button>
  </div>

 </div>
    </section>
  )
}

export default IndustrySection