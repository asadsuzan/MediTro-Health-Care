import React from "react";
import "./Banner.css";
import { AiOutlineHome } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { NavLink, useNavigate } from "react-router-dom";
import {
  OverlayBg1,
  OverlayBg2,
  OverlayBg3,
  OverlayBg4,
  OverlayBg7,
} from "../OverlayBg/OverlayBg";

const Banner = ({ page }) => {
  const { pathname } = useLocation();
  console.log(pathname.toUpperCase());
  return (
    <div className="banner position-relative">
      <div className="container text-center">
        <h3 className="">{page}</h3>
        <div className="path-tab shadow-lg">
          <NavLink
            to="/"
            className={"text-light d-flex align-items-center"}
            style={{ gap: "2px" }}
          >
            <AiOutlineHome size={"1.4rem"} />
            home
          </NavLink>
          /<NavLink to={pathname}>{pathname.split("/")[1]}</NavLink>
        </div>
      </div>
      {/* for overlay background */}
      <OverlayBg3 style={{ top: "10%", left: "5%" }} />
      <OverlayBg4 style={{ top: "100%", left: "50%" }} />
      <OverlayBg7 style={{ top: "10%", right: "5%" }} />
      <OverlayBg2 style={{ top: "10%", right: "5%" }} />
    </div>
  );
};

export default Banner;
