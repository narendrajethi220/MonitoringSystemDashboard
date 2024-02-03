import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { TiTick } from "react-icons/ti";
import "../App.css";

const StatusBar = () => {
  const strokeWidth = 8; // Adjust the stroke width as needed

  const circleStyles = buildStyles({
    strokeLinecap: "butt", // Use "butt" to create a flat line for the tick mark
    pathTransitionDuration: 0.5,
    pathColor: "#07d707",
    trailColor: "#07d707",
  });

  return (
    <div className="circular-progress-with-tick">
      <CircularProgressbar
        value={100} // Set value to 100 for a full circle
        text=""
        strokeWidth={strokeWidth}
        styles={circleStyles}
      />
      <div className="tick-mark">
        {" "}
        <TiTick />
      </div>
    </div>
  );
};

export default StatusBar;
