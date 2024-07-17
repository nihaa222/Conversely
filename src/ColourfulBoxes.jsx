import React, { useState } from "react";

const ColorfulBoxes = () => {
  const [clickOrder, setClickOrder] = useState([]);
  const [colors, setColors] = useState(Array(9).fill("blue"));

  const changeColor = (index) => {
    if (colors[index] === "blue") {
      const newColors = [...colors];
      newColors[index] = "green";
      setColors(newColors);

      const newClickOrder = [...clickOrder, index];
      setClickOrder(newClickOrder);

      if (newClickOrder.length === 9) {
        changeColorsInSequence(newClickOrder);
      }
    }
  };

  const changeColorsInSequence = (clickOrder) => {
    let sequence = clickOrder.slice();
    let interval = 500;

    const changeNext = () => {
      if (sequence.length > 0) {
        const index = sequence.shift();
        setTimeout(() => {
          const newColors = [...colors];
          newColors[index] = "orange";
          setColors(newColors);
          changeNext();
        }, interval);
      }
    };

    changeNext();
  };

  const boxStyle = {
    width: "100px",
    height: "100px",
    backgroundColor: "blue",
    display: "inline-block",
    margin: "10px",
    cursor: "pointer",
    textAlign: "center",
    lineHeight: "100px",
    color: "white",
    fontSize: "20px",
  };

  return (
    <div className="container">
      {colors.map((color, index) => (
        <div
          key={index}
          className="box"
          style={{ ...boxStyle, backgroundColor: color }}
          onClick={() => changeColor(index)}
        ></div>
      ))}
    </div>
  );
};

export default ColorfulBoxes;
