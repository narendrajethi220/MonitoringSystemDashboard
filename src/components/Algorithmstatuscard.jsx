import React from "react";
import "../App.css";
import StatusBar from "./StatusBar";
import { GrFormNextLink } from "react-icons/gr";

const algorithmStatusCard = () => {
  return (
    <div className="algo-status">
      <div className="sample-data">
        <h4 style={{ color: "white" }}>Algorithm Status</h4>
        <button className="btn-graph-next">
          <GrFormNextLink className="btn-icon" />
        </button>
      </div>
      <div className="status-bar">
        <StatusBar />
        <p className="algo-status-details">Running in Real Time</p>
      </div>
    </div>
  );
};

export default algorithmStatusCard;
