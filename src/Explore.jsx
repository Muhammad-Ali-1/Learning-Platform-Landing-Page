import React from "react";
import explore from "./assets/explore.png";
import exploreIcon1 from "./assets/explore-icon-1.svg";
import exploreIcon2 from "./assets/explore-icon-2.svg";
import exploreIcon3 from "./assets/explore-icon-3.svg";

const Explore = () => {
  return (
    <div className="explore-section">
      <div className="explore-container">
        <div className="left">
          <img src={explore} alt="" />
        </div>
        <div className="right">
          <h1 className="heading">
            What Kind of Courses Offers Learning Platform
          </h1>
          <p className="text">
            High-definition video is video of higher resolution and quality than
            standard-definition. Generally any video image with considerably
            more than 480 vertical scan lines or 576 vertical lines is
            considered high-definition
          </p>
          <div className="features">
            <div className="feature feature1">
              <div className="icon">
                <img src={exploreIcon1}></img>
              </div>
              <h4>1500+ Courses</h4>
            </div>
            <div className="feature feature2">
              <div className="icon">
                <img src={exploreIcon2}></img>
              </div>
              <h4>200+ Free Videos</h4>
            </div>
            <div className="feature feature3">
              <div className="icon">
                <img src={exploreIcon3}></img>
              </div>
              <h4>10K+ Lessons</h4>
            </div>
            <div className="feature feature3">
              <div className="icon">
                <img src={exploreIcon3}></img>
              </div>
              <h4>Qualified Teachers</h4>
            </div>
            <div />
          </div>
          <button className="btn">Explore Courses</button>
        </div>
      </div>
    </div>
  );
};

export default Explore;
