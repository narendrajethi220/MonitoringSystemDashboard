import React from "react";
import "../App.css";
import { GrFormNextLink } from "react-icons/gr";
import LineChart from "./LineChart";
const Graph = () => {
  return (
    <div className="graph">
      <div className="sample-data">
        <h3>XXX</h3>
        <h3>31.56 PSI</h3>
        <button className="btn-graph-next">
          <GrFormNextLink className="btn-icon" />
        </button>
      </div>
      <div className="line-chart">
        <LineChart />
      </div>
    </div>
  );
};

export default Graph;
