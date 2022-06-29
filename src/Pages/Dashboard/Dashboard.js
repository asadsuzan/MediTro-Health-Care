import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import React from "react";
import Header from "../../Components/Header/Header";
import "./Dashboard.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebaseConfig";
import { MyButtonLg } from "../../Components/MyButtons/MyButtons";
import { CgProfile } from "react-icons/cg";
import { MdDashboard } from "react-icons/md";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { useState } from "react";
import userThumb from "../../assets/about-img/about1.jpg";
import { signOut } from "firebase/auth";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [active, setActive] = useState(false);
  const { pathname } = useLocation();

  return (
    <>
      <div className="dashboard-toggler shadow-sm  d-flex">
        <button onClick={() => setActive(!active)}>
          {active ? (
            <AiOutlineClose size={"3rem"} />
          ) : (
            <HiOutlineMenuAlt2 size={"3rem"} />
          )}
        </button>

        <div>
          {" "}
          <Link to={"/"}>Home</Link>
          <span>{pathname}</span>
          <p>Dashboard</p>
        </div>
      </div>
      {/* navigation */}
      <div className={`d-nav shadow-lg ${active && "d-nav-active"}`}>
        <div className="d-nav-top">
          <figure>
            <img
              src={userThumb}
              alt={user?.displayName}
              className="img-fluid"
            />
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
          <MyButtonLg
            action={() => signOut(auth)}
            style={{
              background: "#f17732",
              padding: "10px 0",
              marginTop: "1rem",
            }}
          >
            <FiLogOut size={"1.4rem"} className="me-2" />
            SignOut
          </MyButtonLg>
        </div>
      </div>
      {/* navigation */}
      <div className="dashboard">
        <Outlet />
      </div>
    </>
  );
};

export default Dashboard;
