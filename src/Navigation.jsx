import React, { useState } from "react";
import logo from "./assets/logo.svg";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [menuState, setMenuState] = useState(false);

  const handleMenuClick = () => {
    setMenuState(!menuState);
    menuState
      ? document.body.classList.remove("no-scroll")
      : document.body.classList.add("no-scroll");
  };
  return (
    <div className={menuState ? " header header-mobile" : "header"}>
      <div className="header-content">
        <div className="navigation">
          <div
            className={
              menuState ? "navigation-content" : "navigation-content setHeight"
            }
          >
            <div className="logo">
              <img className="nav-logo" src={logo} alt="" />
            </div>
            <div className={menuState ? "nav-links" : "nav-links hide"}>
              <a href=""></a>
              <NavLink to="#">Home</NavLink>
              <NavLink to="#">Programs</NavLink>
              <NavLink to="#">Solutions</NavLink>
              <NavLink to="#">Courses</NavLink>
              <NavLink to="#">Partners</NavLink>
              <NavLink to="#">Contact</NavLink>
            </div>
            <div
              className={
                menuState ? "nav-btns-section" : "nav-btns-section hide"
              }
            >
              <button className="nav-btns login-btn">Log in</button>
              <button className="nav-btns signup-btn">Sign up</button>
            </div>
            {/* <div className="nav-menu-icons"> */}
            {menuState ? (
              <i
                onClick={handleMenuClick}
                className="close-icon ri-close-line"
              ></i>
            ) : (
              <i
                onClick={handleMenuClick}
                className="menu-icon ri-menu-2-line"
              ></i>
            )}
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
