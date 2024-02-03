import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { GrOverview } from "react-icons/gr";
import { AiOutlineDownload } from "react-icons/ai";
import { TbUserUp } from "react-icons/tb";
import { SlCallOut } from "react-icons/sl";
import { FiDatabase } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { TbActivityHeartbeat } from "react-icons/tb";
import { PiAlien } from "react-icons/pi";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { IoCloseSharp } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Navigation Links with Icons */}

{/*       <button className="mobile-view">
        <GiHamburgerMenu className="mobile-view-icon" />
      </button>
      <button className="mobile-view">
        <IoCloseSharp className="mobile-view-icon" />
      </button> */}

      <Link to="/" className="sidebar-link active">
        <GrOverview className="icon" />
        Overview
      </Link>

      <Link to="/algorithms" className="sidebar-link ">
        <PiAlien className="icon" />
        Algorithms
      </Link>

      <Link to="/sensor-health" className="sidebar-link">
        <TbActivityHeartbeat className="icon" />
        Sensor Health
      </Link>

      <Link to="/data-visualization" className="sidebar-link">
        <FiDatabase className="icon" />
        Data Visualization
      </Link>

      <Link to="/settings" className="sidebar-link">
        <IoSettingsOutline className="icon" />
        Settings
      </Link>

      <Link to="/contact-clients" className="sidebar-link">
        <SlCallOut className="icon" />
        Contact Clients
      </Link>

      {/* Download Report Button */}
      <button className="download-button">
        <AiOutlineDownload className="icon-download" />
        Download Report
      </button>

      {/* User Section */}
      <div className="user-section">
        <img
          src="/images/user-profile-icon.svg"
          alt="User"
          className="user-image"
        />
        <span className="user-name">XXXXXX</span>
        <TbUserUp className="user-icon" />
      </div>
    </div>
  );
};

export default Sidebar;
