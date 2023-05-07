import React from "react";
import Card from "./Card";

import item from "../assets/data/data.json";
const Cards = ({ frame }) => {
  return (
    <>
      {item.map((value, index) => {
        const { title, img, bgColor, timeframes } = value;
        // console.log(timeframes[props.frame].current);
        return (
          <>
            {
              <Card
                key={index}
                Title={title}
                imgSrc={img}
                bg={bgColor}
                current={timeframes[frame].current}
                previous={timeframes[frame].previous}
              />
            }
          </>
        );
      })}
    </>
  );
};

export default Cards;
