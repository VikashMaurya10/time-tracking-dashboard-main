import React from "react";
import Card from "./Card";

import item from "../assets/data/data.json";
const Grid = (props) => {
  return (
    <>
      {item.map((value, index) => {
        const { title, img, bgColor, timeframes } = value;
        if (props.frame == `daily`) {
          return (
            <>
              {
                <Card
                  key={index}
                  Title={title}
                  imgSrc={img}
                  bg={bgColor}
                  current={timeframes.daily.current}
                  previous={timeframes.daily.previous}
                />
              }
            </>
          );
        } else if (props.frame == `weekly`) {
          return (
            <>
              {
                <Card
                  key={index}
                  Title={title}
                  imgSrc={img}
                  bg={bgColor}
                  current={timeframes.weekly.current}
                  previous={timeframes.weekly.previous}
                />
              }
            </>
          );
        } else if (props.frame == `monthly`) {
          return (
            <>
              {
                <Card
                  key={index}
                  Title={title}
                  imgSrc={img}
                  bg={bgColor}
                  current={timeframes.monthly.current}
                  previous={timeframes.monthly.previous}
                />
              }
            </>
          );
        }
      })}
    </>
  );
};

export default Grid;
