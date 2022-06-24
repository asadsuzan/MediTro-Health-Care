import React from "react";
import "./SectionTitle.css";

const SectionTitle = ({ children, style }) => {
  return (
    <div className="section-title" style={style}>
      {children}
    </div>
  );
};

export default SectionTitle;
