import React from "react";
import "../../assets/css/loader.css";

const Loader = () => {
  return (
    <div className="ai-loader-container">
      <div className="ai-spinner"></div>
      <p className="ai-loader-text">Loading Latest Blogs...</p>
    </div>
  );
};

export default Loader;
