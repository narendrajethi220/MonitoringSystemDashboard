import React from "react";
import "../App.css";
import { FaPlus } from "react-icons/fa";
import { MdOutlineIosShare } from "react-icons/md";
import { ImEqualizer2 } from "react-icons/im";
import { MdOutlineFileDownload } from "react-icons/md";

const Share = () => {
  return (
    <div className="shareable">
      <button className="btn-info">
        <FaPlus className="icon" />
      </button>
      <button className="btn-info">
        <MdOutlineIosShare className="icon" />
      </button>
      <button className="btn-info">
        <ImEqualizer2 className="icon" />
      </button>
      <button className="btn-info">
        <MdOutlineFileDownload className="icon" />
      </button>
    </div>
  );
};

export default Share;
