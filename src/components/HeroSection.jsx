import React from "react";
import Card from "./Card";
import Selection from "./Selection";
import Share from "./Share";
import "../App.css";
import Graph from "./Graph";
import Events from "./Events";
import Health from "./Health";
import Missedpacketscard from "./Missedpacketscard";
import Algorithmstatuscard from "./Algorithmstatuscard";
import Pressurevalue from "./Pressurevalue";
const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-notification-section">
        <Card title="XXX" value="45" color="#48d918" bgColor="#fff" />
        <Card title="XXX" value="24" color="#dc2626" bgColor="#fff" />
        <Card title="XXX" value="43" color="#48d918" bgColor="#fff" />
        <Card title="XXX" value="35" color="#fbbf24" bgColor="#fff" />
        <Card title="Pipeline is Safe" color="#00ff00" bgColor="#00ff00" />
      </div>
      <div className="hero-main">
        <div className="hero-main-one">
          <div className="hero-selection-share">
            <div className="selection">
              <Selection />
            </div>
            <div className="share">
              <Share />
            </div>
          </div>
          <div className="realtime-graph">
            <Graph />
          </div>
          <div className="events-health">
            <div className="events">
              <Events />
            </div>
            <div className="health">
              <Health />
            </div>
          </div>
        </div>
        <div className="hero-main-two">
          <div className="missed-packets">
            <Missedpacketscard />
          </div>
          <div className="algorithm-status">
            <Algorithmstatuscard />
          </div>
          <div className="pressure-value">
            <Pressurevalue />
          </div>
        </div>
      </div>
      <div className="map">
        <iframe
          title="Google Maps - Roorkee"
          width="100%"
          height="600"
          style={{ borderRadius: "10px" }}
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Roorkee+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default HeroSection;
