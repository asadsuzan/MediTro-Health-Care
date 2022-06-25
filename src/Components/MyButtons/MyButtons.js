import React from "react";
import { AiFillCaretRight } from "react-icons/ai";
import "./MyButtons.css";

const MyButtonLg = ({ children, style, className }) => {
  return (
    <button className={`MyButtonLg shadow-lg  ${className}`} style={style}>
      {children}
      <span>
        {" "}
        <AiFillCaretRight />
      </span>
    </button>
  );
};

export { MyButtonLg };
