import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import React from "react";
import "./Dashboard.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebaseConfig";
import { MyButtonLg } from "../../Components/MyButtons/MyButtons";
import { CgProfile } from "react-icons/cg";
import { MdDashboard } from "react-icons/md";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { MdDarkMode } from "react-icons/md";
import { CgDarkMode } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import { useState } from "react";
import userThumb from "../../assets/about-img/about1.jpg";
import { signOut } from "firebase/auth";
import { UseAdmin } from "../../hooks";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [isAdmin, isLoading] = UseAdmin(user);
  const [active, setActive] = useState(false);
  const [darkMood, setDarkMood] = useState(false);
  const { pathname } = useLocation();

  return (
    <>
      <div className={`dashboard-toggler ${darkMood && "dark-mood"}`}>
        <div className="d-flex ">
          {" "}
          <button onClick={() => setActive(!active)}>
            {active ? (
              <AiOutlineClose size={"3rem"} />
            ) : (
              <HiOutlineMenuAlt2 size={"3rem"} />
            )}
          </button>
          <div className="fw-bold">
            {" "}
            <Link to={"/"}>Home</Link>
            <span>{pathname}</span>
            <p className={`${darkMood && "text-light"}`}>Dashboard</p>
          </div>
        </div>
        <div>
          {" "}
          <div
            title="change theme"
            className="theme-switch "
            onClick={() => setDarkMood(!darkMood)}
          >
            {/* <span
              className={`shadow-lg  ${darkMood && "theme-switch-toggle"}`}
            ></span> */}
            <CgDarkMode color={darkMood ? "white" : "black"} size={"2rem"} />
          </div>
        </div>
      </div>
      {/* navigation */}
      <div
        className={`d-nav  ${active && "d-nav-active"} ${
          darkMood && "d-nav-dark"
        }`}
      >
        <div className="d-nav-top">
          <figure>
            {user?.photoURL ? (
              <img
                src={user?.photoURL}
                alt={user?.displayName}
                className="img-fluid"
              />
            ) : (
              <div className="">{user?.displayName.slice(0, 1)}</div>
            )}
          </figure>
          <p>{user?.displayName}</p>
        </div>
        <div className="d-nav-links">
          <NavLink to={"profile"} onClick={() => setActive(false)}>
            <CgProfile />
            <b>profile</b>
          </NavLink>
          <NavLink to={"my_Appointments"} onClick={() => setActive(false)}>
            <MdDashboard />
            <b>Appointment</b>
          </NavLink>
          {isAdmin && (
            <NavLink to={"users"} onClick={() => setActive(false)}>
              <MdDashboard />
              <b>All Users</b>
            </NavLink>
          )}
          <MyButtonLg
            action={() => {
              signOut(auth);
              localStorage.removeItem("accessToken");
            }}
            style={{
              background: "#f17732",
              padding: "5px 0",
              marginTop: "1rem",
            }}
          >
            <FiLogOut size={"1.4rem"} className="me-2" />
            SignOut
          </MyButtonLg>
        </div>
      </div>
      {/* navigation */}
      <div className={`dashboard ${darkMood && "dark-mood"} `}>
        <Outlet />
      </div>
    </>
  );
};

export default Dashboard;
