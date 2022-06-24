import React from "react";
import { AiFillCaretRight } from "react-icons/ai";
import "./MyButtons.css";

const MyButtonLg = ({ children, style, className }) => {
  return (
    <button
      className={`MyButtonLg shadow-lg text-light ${className}`}
      style={style}
    >
      {children}
      <span>
        {" "}
        <AiFillCaretRight />
      </span>
    </button>
  );
};

export { MyButtonLg };
