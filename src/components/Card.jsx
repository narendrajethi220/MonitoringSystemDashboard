import React from "react";
import "../App.css";

const Card = ({ title, value, color, bgColor }) => {
  const cardStyle = { borderColor: color, backgroundColor: bgColor };
  const cardValueStyle = { backgroundColor: color, borderColor: color };
  return (
    <div className="hero-card" style={cardStyle}>
      <h3 className="card-title">{title}</h3>
      {value && (
        <h3 className="card-value" style={cardValueStyle}>
          {value}
        </h3>
      )}
    </div>
  );
};

export default Card;
