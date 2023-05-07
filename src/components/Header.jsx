import React from "react";
import profileImg from "../assets/image/image-jeremy.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header__profile d-f jc-sb fd-c">
        <img src={profileImg} alt="profile" />
        <div className="">
          <p>Report for</p>
          <h1>
            <span>Jeremy</span> Robson
          </h1>
        </div>
      </div>
      <div className="header__navigation d-f fd-c">
        <NavLink to="/daily" className="link">
          Daily
        </NavLink>
        <NavLink to="/weekly" className="link">
          Weekly
        </NavLink>
        <NavLink to="/monthly" className="link">
          Monthly
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
