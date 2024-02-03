import React from "react";
import "../App.css";
import { GrFormNextLink } from "react-icons/gr";

const Events = () => {
  return (
    <div className="event-data">
      <div className="event-header">
        <h3>Events</h3>
        <button className="btn-graph-next">
          <GrFormNextLink className="btn-icon" />
        </button>
      </div>
      <div className="event-table">
        <table>
          <tbody>
            <tr>
              <th>Time</th>
              <th>Location</th>
              <th>Sensor ID</th>
              <th>Event Type</th>
            </tr>
            <tr>
              <td>07:34:54</td>
              <td>XX</td>
              <td>P-002</td>
              <td>YY</td>
            </tr>
            <tr>
              <td>08:04:39</td>
              <td>XX</td>
              <td>P-003</td>
              <td>YY</td>
            </tr>
            <tr>
              <td>11:37:38</td>
              <td>XX</td>
              <td>P-002</td>
              <td>YY</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Events;
