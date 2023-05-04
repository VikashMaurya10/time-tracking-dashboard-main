import React from "react";
import profileImg from "../assets/images/image-jeremy.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header__profile d-f fd-c">
        <img src={profileImg} alt="profile" />
        <p>Report for</p>
        <h1>
          <span>Jeremy</span> Robson
        </h1>
      </div>
      <div className="header__navigation d-f fd-c">
        <NavLink to="/?q=daily" className="link">
          Daily
        </NavLink>
        <NavLink to="/?q=weekly" className="link">
          Weekly
        </NavLink>
        <NavLink to="/?q=monthly" className="link">
          Monthly
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
