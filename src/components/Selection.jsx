import React from "react";
import "../App.css";

const Selection = () => {
  return (
    <div className="selection">
      <select name="Select Location" defaultValue="">
        <option value="" disabled>
          Select Location
        </option>
        <option value="Option1">Roorkee</option>
        <option value="Option1">Dehradun</option>
        <option value="Option1">Haridwar</option>
        <option value="Option1">New Delhi</option>
      </select>
    </div>
  );
};

export default Selection;
