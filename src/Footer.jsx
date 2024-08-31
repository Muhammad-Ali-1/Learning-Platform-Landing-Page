import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./assets/logo2.svg";
import arrow from "./assets/forwardArrow.svg";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="left">
          <img src={logo} alt="" />
          <div>
            <p>CONTACT</p>
            <h4>halloeduca@gmail.com</h4>
          </div>
        </div>
        {/* <div className="for-mobile"> */}
        <div className="mid">
          <div className="links">
            <NavLink to="#">Home</NavLink>
            <NavLink to="#">Programs</NavLink>
            <NavLink to="#">Solutions</NavLink>
            <NavLink to="#">Courses</NavLink>
            <NavLink to="#">Partners</NavLink>
            <NavLink to="#">Contact</NavLink>
          </div>
          <p>© 2021 educa Ltd </p>
        </div>
        <div className="right">
          <h3>Get in Touch.</h3>
          <p>Stay informed on how you can make difference</p>
          <div className="input">
            <img src={arrow} alt="" />
            <input type="text" placeholder="Enter your Email ... " />
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
