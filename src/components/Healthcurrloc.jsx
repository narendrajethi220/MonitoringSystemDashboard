import React from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import "../App.css";
const Healthcurrloc = () => {
  return (
    <div className="current-loc">
      <div>
        <button className="curr-left">
          <FaAngleLeft className="curr-icon-left" />
        </button>
      </div>
      <div>
        <p className="curr-loc">Chudiyala</p>
      </div>
      <div>
        <button className="curr-right">
          <FaAngleRight className="curr-icon-right" />
        </button>
      </div>
    </div>
  );
};

export default Healthcurrloc;
