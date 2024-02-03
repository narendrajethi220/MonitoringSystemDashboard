import React from "react";
import "../App.css";
import { GrFormNextLink } from "react-icons/gr";
import { FaArrowTrendUp } from "react-icons/fa6";
import CurrentLocationButton from "./CurrentLocationButton";

const PressureValue = () => {
  return (
    <div className="pressure-value">
      <div className="sample-data">
        <h4 style={{ color: "white" }}>Pressure Value(psi)</h4>
        <button className="btn-graph-next">
          <GrFormNextLink className="btn-icon" />
        </button>
      </div>
      <div className="pressure-data">
        <p style={{ color: "white" }}>31.56</p>
        <FaArrowTrendUp
          className="stock-icon"
          style={{ color: "#00ff00", marginLeft: ".5rem", marginBottom: "0" }}
        />
      </div>
      <div className="curr-location">
        <CurrentLocationButton />
      </div>
    </div>
  );
};

export default PressureValue;
