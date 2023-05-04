import React, { useEffect, useState } from "react";
import img from "../assets/images/icon-ellipsis.svg";

const Card = ({ Title, imgSrc, bg, array }) => {
  // const [query, setQuery] = useState(null);

  // useEffect(() => {
  //   const urlParams = new URLSearchParams(window.location.search);
  //   const q = urlParams.get("q");
  //   setQuery(q);
  //   // console.log(q);
  // }, [query]);

  return (
    <>
      {console.log(array)}
      <div
        className="card"
        style={{ backgroundImage: `url(${imgSrc})`, backgroundColor: `${bg}` }}
      >
        <div className="inner ">
          <div className="d-f ai-c jc-sb">
            <h2>{Title}</h2>
            <img src={img} alt="logo" />
          </div>
          <h3>{array.weekly.previous}hrs</h3>
          <p>Previous - {array.weekly.previous}hrs</p>
        </div>
      </div>
    </>
  );
};

export default Card;
