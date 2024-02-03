import React from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import "../App.css";

const CurrentLocationButton = () => {
  return (
    <div className="div-current-loc">
      <div>
        <button className="btn-left">
          <FaAngleLeft className="btn-icon-left" />
        </button>
      </div>
      <div className="div-location">Chudiyala</div>
      <div className="div-right">
        <button className="btn-right">
          <FaAngleRight className="btn-icon-right" />
        </button>
      </div>
    </div>
  );
};

export default CurrentLocationButton;
