import React, { useState } from "react";
import course1 from "./assets/course1.png";
import course2 from "./assets/course2.png";
import course3 from "./assets/course3.png";
import rating from "./assets/rating.svg";
import bestSellerIcon from "./assets/bestSellerIcon.svg";

const Courses = () => {
  const courses = [
    {
      id: 1,
      img: course1,
      name: "Coding Web",
      rating: rating,
      price: "$123.30",
    },
    {
      id: 2,
      img: course2,
      name: "Flutter",
      rating: rating,
      price: "$174.30",
    },
    {
      id: 3,
      img: course3,
      name: "Learn using Figma",
      rating: rating,
      price: "$223.30",
    },
    {
      id: 4,
      img: course2,
      name: "Flutter",
      rating: rating,
      price: "$174.30",
    },
    // {
    //   id: 5,
    //   img: course3,
    //   name: "Learn using Figma",
    //   rating: rating,
    //   price: "$223.30",
    // },
  ];

  const slideRight = () => {
    console.log("Right");
  };

  const slideLeft = () => {
    console.log("Left");
  };

  return (
    <div className="courses-section">
      <div className="courses-container">
        <div className="top">
          <h1>Find your Perfect Course</h1>
          <div className="buttons">
            <button onClick={slideLeft} className="left-button">
              <i className="ri-arrow-left-line"></i>
            </button>
            <button onClick={slideRight} className="right-button">
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
        <div className="bottom">
          <div className="course-slider">
            {courses.map((course) => (
              <div key={course.id} className="card">
                <div className="card-content">
                  <img className="card-image" src={course.img} alt="" />
                  <div className="card-data">
                    <div className="line1">
                      <h1>{course.name}</h1>
                      <img src={course.rating} alt="" />
                    </div>
                    <div className="line2">
                      <h3 className="price">{course.price}</h3>
                      <button>Book Now</button>
                    </div>
                    <div className="line3">
                      <div className="icon">
                        <img src={bestSellerIcon} alt="" />
                      </div>
                      <h3>Best Seller</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
