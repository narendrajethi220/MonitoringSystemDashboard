import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "../App.css";

const Progressbar = ({ percentage }) => {
  const strokeWidth = 15;
  return (
    <div className="circular-progress-bar">
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        strokeWidth={strokeWidth}
        styles={{
          path: { stroke: "#00ff00" }, // Green color for progress
          text: { fill: "#000", fontWeight: "bold" }, // black color for text
        }}
      />
    </div>
  );
};

export default Progressbar;
