import React from "react";
import "./IndustrySection.scss";
import { LiaBoxSolid } from "react-icons/lia";
import { FaArrowRight } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { LuPlane } from "react-icons/lu";
import { RiGraduationCapFill } from "react-icons/ri";
import Image7 from '../../../img/Icon1.png'
import Image8 from '../../../img/Icon2.png'
import Image4 from '../../../img/Icon3.png'
import Image3 from '../../../img/Icon4.png'
import Image5 from '../../../img/Icon5.png'
import Image6 from '../../../img/Icon6.png'
import Image1 from '../../../img/Icon7.png'
import Image2 from '../../../img/Icon8.png'
import Image9 from '../../../img/Icon9.png'

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
          <div className="icon">
            <img src={Image1} alt="" />
          </div>
          <p>Infrastructure Construction, Network Installation, and Business Server Equipment</p>
          <span>Our company excels in delivering comprehensive IT infrastructure services, specializing in network installation and business server equipment setup. Our skilled team designs and deploys secure, scalable network environments tailored to your specific business needs. By prioritizing connectivity, security, and efficiency, we ensure your systems operate reliably and achieve peak performance. Committed to long-term support, we empower your organization to thrive in an evolving digital landscape.</span>
        </div>
        <div className="cart">
          <div className="icon">
            <img src={Image2} alt="" />
          </div>
          <p>Methodology Writing and Preparation of Technical Requirements</p>
          <span>Developing a clear methodology and detailed technical requirements is essential for project success. This phase involves defining a structured approach, outlining the methods and standards that will guide the design process, and ensuring all technical specifications are aligned with project objectives. We meticulously prepare documentation to capture these requirements, providing a solid foundation for smooth implementation. This ensures that all stakeholders have a clear understanding of the project's technical and procedural expectations.</span>
        </div>
        <div className="cart">
          <div className="icon">
            <img src={Image3} alt="" />
          </div>
          <p>Implementation and Technical Support of SAP Systems</p>
          <span>We offer complete solutions for the implementation and support of SAP systems, ensuring they integrate smoothly with your existing business processes. Our specialists oversee every phase of SAP deployment, including setup, configuration, and personalized enhancements for optimal performance. Following the implementation, we deliver continuous technical support to maintain system efficiency, manage upgrades, and resolve any issues. Rely on us to unlock the full potential of your SAP solutions and enhance your organizational effectiveness.</span>
        </div>
        <div className="cart">
          <div className="icon">
            <img src={Image4} alt="" />
          </div>
          <p>Software Development</p>
          <span>We specialize in delivering customized software development solutions that enhance operational efficiency. Our experienced team creates high-performance, scalable applications that prioritize both security and user experience. From enterprise software to mobile apps and cloud-based solutions, we focus on optimizing your software for reliability and future growth. Collaborate with us to harness innovative technology that drives your business forward.</span>
        </div>
        <div className="cart">
          <div className="icon">
            <img src={Image5} alt="" />
          </div>
          <p>SAP BRP Systems Technical and End-User Training</p>
          <span>We provide extensive training programs for SAP BRP systems, tailored for both technical teams and end-users. Our customized curriculum encompasses system functionality, technical configurations, and industry best practices, empowering users and IT staff to effectively manage SAP BRP solutions. Through interactive workshops and detailed tutorials, we equip your team with the knowledge and skills necessary to maximize the performance and productivity of SAP systems. Invest in your team's expertise to ensure successful implementation and utilization of SAP technologies.</span>
        </div>
        <div className="cart">
          <div className="icon">
            <img src={Image6} alt="" />
          </div>
          <p>Project Management</p>
          <span>Effective project management is essential for the success of web design projects. Our approach involves setting clear objectives, creating strategic plans, and ensuring timely execution. By closely tracking progress and adapting to changes, we align our projects with client expectations. This structured yet flexible methodology guarantees a seamless experience from concept to completion, delivering user-centric websites</span>
        </div>
        <div className="cart">
          <div className="icon">
            <img src={Image7} alt="" />
          </div>
          <p>Quality Control</p>
          <span>Quality control is a critical part of our web design process, ensuring that the end product meets the highest standards. Our rigorous QA process involves thorough testing, meticulous reviews, and continuous improvements. By identifying and addressing issues early, we maintain the integrity of the design, ensuring a reliable and high-quality final product that exceeds client expectations.</span>
        </div>
        <div className="cart">
          <div className="icon">
            <img src={Image8} alt="" />
          </div>
          <p>Web Page Development</p>
          <span>We deliver exceptional web development services that create responsive and visually engaging websites, elevating your brand's online presence. Our solutions prioritize seamless functionality across all devices, integrating intuitive design with optimized performance and strong security. From simple landing pages to complex web applications, we provide scalable solutions tailored to your business goals. Partner with us to transform your digital experience and drive engagement.</span>
        </div>
        <div className="cart">
          <div className="icon">
            <img src={Image9} alt="" />
          </div>
          <p>SmartTrack Solutions</p>
          <span>SmartTrack Solutions is a unified platform that combines Vehicle License Plate Recognition with advanced Barcode and POS technology. This innovative system captures high-resolution images of license plates while seamlessly processing product information through barcode scanning. By enhancing real-time analytics and streamlining retail operations, SmartTrack Solutions boosts security and operational efficiency. With precise tracking and faster transactions, it transforms vehicle management and retail experiences, ensuring optimal customer satisfaction.</span>
        </div>

      </div>
    </section>
  );
}

export default IndustrySection;
