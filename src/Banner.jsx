import React from "react";
import bannerButtonDecor from "./assets/bannerButtonDecor.svg";
import bannerDecor1 from "./assets/bannerDecor1.svg";
import bannerDecor2 from "./assets/bannerDecor2.svg";
import bannerDecor3 from "./assets/bannerDecor3.svg";
import bannerDecor4 from "./assets/bannerDecor4.svg";

const Banner = () => {
  return (
    <div className="banner-section">
      <div className="banner-container">
        <div className="banner">
          <img className="banner-decor1" src={bannerDecor1} alt="" />
          <img className="banner-decor2" src={bannerDecor2} alt="" />
          <img className="banner-decor3" src={bannerDecor3} alt="" />
          <img className="banner-decor4" src={bannerDecor4} alt="" />
          <div className="heading">
            <h1>Find a New Way to Improve</h1>
            <div className="heading-part">
              <img className="button-decor1" src={bannerButtonDecor} alt="" />
              <img className="button-decor2" src={bannerButtonDecor} alt="" />
              <img className="button-decor3" src={bannerButtonDecor} alt="" />
              <img className="button-decor4" src={bannerButtonDecor} alt="" />
              <h2>Your Skills</h2>
            </div>
          </div>
          <button>Choose Plan</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
