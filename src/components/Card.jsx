import React from "react";

const Card = ({ Title, imgSrc, bg, current, previous }) => {
  return (
    <>
      <div
        className="card"
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundColor: `${bg}`,
        }}
      >
        <div className="inner">
          <div className="d-f ai-c jc-sb">
            <h2>{Title}</h2>
            <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                fill="currentColor"
                fill-rule="evenodd"
              />
            </svg>
          </div>
          <div className="about">
            <h3>{current}hrs</h3>
            <p>Previous - {previous}hrs</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
