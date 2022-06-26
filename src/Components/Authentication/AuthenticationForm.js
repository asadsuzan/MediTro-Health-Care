import React from "react";
import "./AuthenticationForm.css";
import logo from "../../assets/logo/logo.png";

import { useLocation } from "react-router-dom";
import { MyButtonLg } from "../MyButtons/MyButtons";

const AuthenticationForm = () => {
  const { pathname } = useLocation();

  return (
    <div className="AuthenticationForm shadow-lg bg-light my-5">
      <figure className="AuthenticationForm-logo">
        <img src={logo} alt="logo" className="img-fluid" />
      </figure>
      <form>
        {pathname === "/signup" && (
          <div className="input-group">
            <label htmlFor="name"></label>
            <input type="text" name="name" placeholder="Name" className="" />
          </div>
        )}
        <div className="input-group">
          <label htmlFor="email"></label>
          <input type="email" placeholder="email" className="" />
        </div>
        <div className="input-group">
          <label htmlFor="password"></label>
          <input type="password" placeholder="password" className="" />
        </div>
        <div className="input-group">
          <MyButtonLg
            style={{
              background: "#1f2278",
              color: "white",
              width: "100%",
              padding: "10px 0",
            }}
          >
            {pathname.split("/")}
          </MyButtonLg>
        </div>
      </form>
    </div>
  );
};

export default AuthenticationForm;
