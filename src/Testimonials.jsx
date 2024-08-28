import React, { useState } from "react";
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
      name: "Donna Scott",
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

  const slideLeft = () => {
    // console.log("Leftt");
    setCurrentCard((c) => Math.max(c - 1, 0));
    console.log(currentCard);
  };
  const slideRight = () => {
    // console.log("Rightt");
    setCurrentCard((c) => Math.min(c + 1, testimonials.length - 1));
    console.log(currentCard);
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
              transform:
                currentCard == 0
                  ? `translateX(${currentCard + 33.33}%)`
                  : `translateX(-${(currentCard - 1) * 33.33}%)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={
                  index == currentCard - 1
                    ? "move-left testimonial"
                    : index == currentCard + 1
                    ? "move-right testimonial"
                    : index == currentCard
                    ? "current-testimonial testimonial"
                    : "testimonial"
                }
              >
                <img
                  className="testimonial-icon"
                  src={testimonialIcon}
                  alt=""
                />
                <img className="avatar" src={testimonial.avatar} alt="" />
                <img className="rating" src={testimonial.rating} alt="" />
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
