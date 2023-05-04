import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
const Grid = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "/src/assets/data/data.json",
    }).then((res) => {
      setItem(res.data);
    });
  }, []);

  return (
    <>
      {item.map((value, index) => {
        const { title, img, bgColor, timeframes } = value;
        return (
          <>
            <Card Title={title} imgSrc={img} bg={bgColor} array={timeframes} />
          </>
        );
      })}
    </>
  );
};

export default Grid;
