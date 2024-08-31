import React, { useState, useRef, useEffect } from "react";
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
    {
      id: 5,
      img: course3,
      name: "Learn using Figma",
      rating: rating,
      price: "$223.30",
    },
    {
      id: 6,
      img: course3,
      name: "Learn using Figma",
      rating: rating,
      price: "$223.30",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [gap, setGap] = useState(0);
  const [isEnd, setIsEnd] = useState(false);
  const sliderRef = useRef(null);
  const cardRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const calculateSizes = () => {
      if (cardRef.current) {
        setCardWidth(cardRef.current.offsetWidth);
      }

      const rootFontSize = parseFloat(
        getComputedStyle(document.documentElement).fontSize
      );
      const gapInRem = 3; // Gap in rem
      setGap(gapInRem * rootFontSize); // Convert gap to pixels
    };

    calculateSizes();

    window.addEventListener("resize", calculateSizes);

    return () => {
      window.removeEventListener("resize", calculateSizes);
    };
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      const sliderWidth = slider.offsetWidth;
      const totalContentWidth = (cardWidth + gap) * courses.length;

      // Calculate the maximum left translation
      const maxTranslateX = totalContentWidth - sliderWidth;

      // Update isEnd based on the current slide and maxTranslateX
      const newIsEnd = currentSlide * (cardWidth + gap) >= maxTranslateX;
      setIsEnd(newIsEnd);
    }
  }, [currentSlide, cardWidth, gap, courses.length]);

  const slideLeft = () => {
    setCurrentSlide((c) => Math.max(c - 1, 0));
  };

  const slideRight = () => {
    setCurrentSlide((c) => Math.min(c + 1, courses.length - 1));
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      slideRight();
    }

    if (touchStartX.current - touchEndX.current < -50) {
      slideLeft();
    }
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
            <button
              onClick={slideRight}
              className="right-button"
              disabled={isEnd}
            >
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
        <div className="bottom">
          <div className="course-slider-container">
            <div
              className="course-slider"
              ref={sliderRef}
              style={{
                transform: `translateX(-${currentSlide * (cardWidth + gap)}px)`,
                transition: "transform 0.7s ease",
              }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {courses.map((course, index) => (
                <div
                  key={course.id}
                  className="card"
                  ref={index === 0 ? cardRef : null} // Assign ref only to the first card
                >
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
        <div className="buttons buttons-for-mobile">
          <button onClick={slideLeft} className="left-button">
            <i className="ri-arrow-left-line"></i>
          </button>
          <button
            onClick={slideRight}
            className="right-button"
            disabled={isEnd}
          >
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Courses;
