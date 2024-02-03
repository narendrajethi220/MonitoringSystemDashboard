import React from "react";
import "../App.css";
import { GrFormNextLink } from "react-icons/gr";
import Pressurebarstatus from "./Pressurebarstatus";
import { GoDotFill } from "react-icons/go";

const Missedpacketscard = () => {
  return (
    <div className="missed-packet-per-hour">
      <div className="sample-data">
        <h4 style={{ color: "white" }}>Missed packets/hour</h4>
        <button className="btn-graph-next">
          <GrFormNextLink className="btn-icon" />
        </button>
      </div>
      <div className="pressure-bar">
        <Pressurebarstatus />
        <div className="sample-data-reading">
          <h2>2</h2>
          <h2>26</h2>
          <h2>7</h2>
        </div>
        <div className="sample-data-list">
          <div className="unordered-list">
            <p>
              <GoDotFill className="icon li-one" />
              XXX
            </p>
            <p>
              <GoDotFill className="icon li-two" />
              XXX
            </p>
            <p>
              <GoDotFill className="icon li-three" />
              XXXX
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Missedpacketscard;
