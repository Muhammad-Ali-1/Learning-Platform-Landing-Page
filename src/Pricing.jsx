import React, { useState } from "react";
import pricingShape1 from "./assets/pricing-shape1.svg";
import pricingShape2 from "./assets/pricing-shape2.svg";
import tick from "./assets/tick.svg";
import dot from "./assets/dot.svg";
import cross from "./assets/cross.svg";
import circle from "./assets/circle.svg";
import selected from "./assets/selected.svg";

const Pricing = () => {
  const monthlyFeatures = [
    {
      id: 1,
      dot: dot,
      text: "All limited links",
      img: tick,
    },
    {
      id: 2,
      dot: dot,
      text: "Own analytics platform",
      img: tick,
    },
    {
      id: 3,
      dot: dot,
      text: "Chat support",
      img: tick,
    },
    {
      id: 4,
      dot: dot,
      text: "Optimize hashtags",
      img: cross,
    },
    {
      id: 5,
      dot: dot,
      text: "Unlimited users",
      img: cross,
    },
  ];
  const yearlyFeatures = [
    {
      id: 1,
      dot: dot,
      text: "All limited links",
      img: tick,
    },
    {
      id: 2,
      dot: dot,
      text: "Own analytics platform",
      img: tick,
    },
    {
      id: 3,
      dot: dot,
      text: "Chat support",
      img: tick,
    },
    {
      id: 4,
      dot: dot,
      text: "Optimize hashtags",
      img: tick,
    },
    {
      id: 5,
      dot: dot,
      text: "Unlimited users",
      img: tick,
    },
  ];

  const packagesPlans = [
    {
      id: 1,
      name: "Intro",
      discount: "20%",
      price: "$19",
    },
    {
      id: 2,
      name: "Base",
      discount: "20%",
      price: "$49",
    },
    {
      id: 3,
      name: "Popular",
      discount: "20%",
      price: "$99",
    },
    {
      id: 4,
      name: "Enterprise",
      discount: "20%",
      price: "$119",
    },
  ];

  const [isMonthlySelected, setIsMonthlySelected] = useState(true);
  const [isYearlySelected, setIsYearlySelected] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(0);

  const handleMonthlyYearly = (planType) => {
    if (planType === "monthly") {
      setIsMonthlySelected(true);
      setIsYearlySelected(false);
    } else if (planType === "yearly") {
      setIsMonthlySelected(false);
      setIsYearlySelected(true);
    }
  };

  const handlePackageClick = (index) => {
    setSelectedPackage(index);
  };

  return (
    <div className="pricing-section">
      <div className="pricing-container">
        <div className="heading">
          <h1>We Prepare a Very Reasonable Pricing Pack For You</h1>
        </div>
        <div className="content">
          <div className="left">
            <img className="shape1" src={pricingShape1} alt="" />
            <img className="shape2" src={pricingShape2} alt="" />
            <div className="top-options">
              <div className="buttons">
                <button
                  className={isMonthlySelected ? "active" : ""}
                  onClick={() => handleMonthlyYearly("monthly")}
                >
                  Monthly
                </button>
                <button
                  className={isYearlySelected ? "active" : ""}
                  onClick={() => handleMonthlyYearly("yearly")}
                >
                  Yearly
                </button>
              </div>
            </div>
            <div className="bottom">
              <div className="features">
                {isMonthlySelected &&
                  monthlyFeatures.map((feature, index) => (
                    <div key={feature.id}>
                      <div className="feature">
                        <div className="left-part">
                          <img src={feature.dot} alt="" />
                          <h3>{feature.text}</h3>
                        </div>
                        <img className="status-icon" src={feature.img} alt="" />
                      </div>
                      {index < monthlyFeatures.length - 1 && <hr />}
                    </div>
                  ))}
                {isYearlySelected &&
                  yearlyFeatures.map((feature, index) => (
                    <div key={feature.id}>
                      <div className="feature">
                        <div className="left-part">
                          <img src={feature.dot} alt="" />
                          <h3>{feature.text}</h3>
                        </div>
                        <img className="status-icon" src={feature.img} alt="" />
                      </div>
                      {index < yearlyFeatures.length - 1 && <hr />}
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="right">
            <div className="packages">
              {packagesPlans.map((plan, index) => (
                <div
                  key={plan.id}
                  className={selectedPackage == index ? "active" : "package"}
                  // className="active package"
                  onClick={() => handlePackageClick(index)}
                >
                  <div className="left-side">
                    <img
                      src={selectedPackage == index ? selected : circle}
                      alt=""
                    />
                    <div className="detail">
                      <h3>{plan.name}</h3>
                      <p>Save {plan.discount}</p>
                    </div>
                  </div>
                  <div className="right-side">
                    <h1>
                      {plan.price}
                      <span>/Month</span>
                    </h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="choose-plan-button">
          <button>Choose Plan</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
