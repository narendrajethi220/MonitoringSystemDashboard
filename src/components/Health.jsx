import React from "react";
import "../App.css";
import { GrFormNextLink } from "react-icons/gr";
import Progressbar from "./Progressbar";
import Healthcurrloc from "./Healthcurrloc";

const Health = () => {
  return (
    <div className="health-data">
      <div className="health-header">
        <h3>Health</h3>
        <button className="btn-graph-next">
          <GrFormNextLink className="btn-icon" />
        </button>
      </div>
      <div className="progress-bar">
        <Progressbar percentage={83} />
      </div>
      <div className="div-curr-loc">
        <Healthcurrloc />
      </div>
    </div>
  );
};

export default Health;
