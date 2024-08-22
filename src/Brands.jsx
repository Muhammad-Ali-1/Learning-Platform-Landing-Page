import React from "react";
import logo2 from "./assets/logo2.svg";
import rating from "./assets/rating.svg";
import brand1 from "./assets/brand1.svg";
import brand2 from "./assets/brand2.svg";
import brand3 from "./assets/brand3.svg";
import brand4 from "./assets/brand4.svg";
import brand5 from "./assets/brand5.svg";

const Brands = () => {
  return (
    <div className="brandsSection">
      <div className="brandsContainer">
        <div className="container">
          <div className="top">
            <div className="left">
              <img src={logo2} alt="" />
              <span>More than 10,000+ companies trust educa</span>
            </div>
            <div className="right">
              <img src={rating} alt="" />
              <span>4,5 Star Ratings (20+ Review)</span>
            </div>
          </div>
          <div className="bottom">
            <div className="brands">
              <div className="brand-box">
                <img className="brand" src={brand1} alt="" />
              </div>
              <div className="brand-box">
                <img className="brand" src={brand2} alt="" />
              </div>
              <div className="brand-box">
                <img className="brand" src={brand3} alt="" />
              </div>
              <div className="brand-box">
                <img className="brand" src={brand4} alt="" />
              </div>
              <div className="brand-box brand5-box">
                <img className="brand brand5" src={brand5} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
