import React from "react";
import herosec from "./assets/herosec.png";

const HeroSection = () => {
  return (
    <>
      <div className="hero-section">
        <div className="hero-section-content">
          <div className="left-part">
            <span className="top-box">
              <span>New</span> Becoming a new Program on online
            </span>
            <h1>A New Different Way to Improve your Skills</h1>
            <p>
              Learning is a Global training provider based across the UK that
              specialises in accredited and bespoke training courses.
            </p>
            <div className="herosec-btns">
              <button className="started-btn">Get Started</button>
              <button className="learn-btn">
                <i className="ri-play-fill"></i>Learn more
              </button>
            </div>
          </div>
          <div className="right-part">
            <img src={herosec} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
