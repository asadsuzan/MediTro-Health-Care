import { Link, useLocation } from "react-router-dom";
import { MyButtonLg } from "../MyButtons/MyButtons";
import React from "react";
import logo from "../../assets/logo/logo.png";
import SocialLogin from "../../assets/SocialLogin/SocialLogin";
import "./AuthenticationForm.css";

const AuthenticationForm = ({ action, error }) => {
  const { pathname } = useLocation();

  return (
    <div className="AuthenticationForm shadow-lg bg-light my-5">
      <figure className="AuthenticationForm-logo">
        <img src={logo} alt="logo" className="img-fluid" />
      </figure>
      <form onSubmit={action}>
        {pathname === "/signup" && (
          <div className="input-group">
            <label htmlFor="name"></label>
            <input
              required
              type="text"
              name="name"
              placeholder="Name"
              className=""
            />
          </div>
        )}
        <div className="input-group">
          <label htmlFor="email"></label>
          <input
            required
            type="email"
            name="email"
            placeholder="email"
            className=""
          />
        </div>
        <div className="input-group">
          <label htmlFor="password"></label>
          <input
            required
            type="password"
            name="password"
            placeholder="password"
            className=""
          />
        </div>
        {pathname === "/signup" && (
          <div className="text-end">
            <Link to={"/login"}>Already have an account?</Link>
          </div>
        )}
        {pathname === "/login" && (
          <div className="text-end">
            <Link to={"/login"}>forgot password?</Link>
          </div>
        )}
        {error && <small className="text-danger">{error.message}</small>}
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
      <SocialLogin />
      <div className="text-capitalize my-3 text-center">
        {pathname === "/login" && (
          <Link to={"/signup"}>don't have an account? Register</Link>
        )}
      </div>
    </div>
  );
};

export default AuthenticationForm;
