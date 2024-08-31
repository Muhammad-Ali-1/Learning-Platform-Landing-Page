import React, { useState, useEffect, useRef } from "react";
import avatar from "./assets/avatar.png";
import avatar2 from "./assets/avatar2.png";
import avatar3 from "./assets/avatar3.png";
import avatar4 from "./assets/avatar4.png";
import avatar5 from "./assets/avatar5.png";
import rating from "./assets/rating.svg";
import testimonialIcon from "./assets/testimonial.svg";

const Testimonials = () => {
  const testimonials = [
    {
      avatar: avatar,
      rating: rating,
      name: "Alice Johnson",
      feedback:
        "This platform offers a wide range of training programs tailored to help learners achieve their goals effectively.",
    },
    {
      avatar: avatar2,
      rating: rating,
      name: "Benjamin Lee",
      feedback:
        "A fantastic resource for acquiring new skills and enhancing existing knowledge with high-quality courses.",
    },
    {
      avatar: avatar3,
      rating: rating,
      name: "Catherine Miller",
      feedback:
        "The learning experience is exceptional, with engaging content and support that makes mastering new topics enjoyable.",
    },
    {
      avatar: avatar4,
      rating: rating,
      name: "Ayesha Riaz",
      feedback:
        "An excellent platform that provides comprehensive training programs designed to meet various learning needs.",
    },
    {
      avatar: avatar5,
      rating: rating,
      name: "Emily Davis",
      feedback:
        "Highly recommended for anyone looking to expand their knowledge and skills through well-structured and accessible courses.",
    },
  ];

  const [currentCard, setCurrentCard] = useState(1);
  const [testimonialWidth, setTestimonialWidth] = useState(0);
  const testimonialRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const touchMoved = useRef(false);

  useEffect(() => {
    if (testimonialRef.current) {
      setTestimonialWidth(testimonialRef.current.offsetWidth);
    }

    const handleResize = () => {
      if (testimonialRef.current) {
        setTestimonialWidth(testimonialRef.current.offsetWidth);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slideLeft = () => {
    setCurrentCard((c) => Math.max(c - 1, 0));
  };

  const slideRight = () => {
    setCurrentCard((c) => Math.min(c + 1, testimonials.length - 1));
  };

  const isMobile = window.innerWidth <= 660;

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchMoved.current = false; // Reset touch moved state
  };

  const handleTouchMove = (e) => {
    touchMoved.current = true; // Set touch moved to true
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchMoved.current) return; // If touch did not move, do nothing

    const threshold = 10; // Minimum distance for swipe detection
    const swipeDistance = touchStartX.current - touchEndX.current;

    if (swipeDistance > threshold) {
      slideRight();
    } else if (swipeDistance < -threshold) {
      slideLeft();
    }
  };

  return (
    <div className="testimonials-section">
      <div className="testimonials-container">
        <div className="heading">
          <h1>Some of Happy Clients</h1>
        </div>
        <div className="content">
          <div
            className="testimonials"
            style={{
              transform: isMobile
                ? `translateX(-${currentCard * testimonialWidth}px)`
                : currentCard === 0
                ? `translateX(${currentCard + 33.33}%)`
                : `translateX(-${(currentCard - 1) * 33.33}%)`,
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                ref={testimonialRef}
                className={
                  index === currentCard - 1
                    ? "move-left testimonial"
                    : index === currentCard + 1
                    ? "move-right testimonial"
                    : index === currentCard
                    ? "current-testimonial testimonial"
                    : "testimonial"
                }
              >
                <img
                  className="testimonial-icon"
                  src={testimonialIcon}
                  alt="testimonial icon"
                />
                <img className="avatar" src={testimonial.avatar} alt="avatar" />
                <img className="rating" src={testimonial.rating} alt="rating" />
                <h2>{testimonial.name}</h2>
                <p>{testimonial.feedback}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="buttons-section">
          <div className="buttons">
            <button onClick={slideLeft} className="left-button">
              <i className="ri-arrow-left-line"></i>
            </button>
            <button onClick={slideRight} className="right-button">
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
