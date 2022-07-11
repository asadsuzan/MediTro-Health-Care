import { NavLink, useNavigate } from "react-router-dom";
import { MyButtonLg } from "../MyButtons/MyButtons";
import { useEffect } from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../assets/logo/logo.png";
import auth from "../../firebaseConfig";
import "./Header.css";

function Header() {
  const [sticky, setSticky] = useState(false);
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 100 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <>
      {/* <div className="header-divider"></div> */}
      <Navbar
        expand="lg"
        className={`primary-header  fixed-top ${
          sticky ? "shadow-sm bg-light" : "bg-transparent"
        }`}
      >
        <Container>
          <Navbar.Brand>
            <img src={logo} alt="MediTro" className="img-fluid logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center" style={{ gap: "20px" }}>
              <NavLink className={"text-uppercase text-decoration-none"} to="/">
                Home
              </NavLink>
              <NavLink
                className={"text-uppercase text-decoration-none"}
                to="/about"
              >
                about
              </NavLink>
              <NavLink
                className={"text-uppercase text-decoration-none"}
                to="/service"
              >
                service
              </NavLink>
              <NavLink
                className={"text-uppercase text-decoration-none"}
                to="/blog"
              >
                blog
              </NavLink>
              <NavLink
                className={"text-uppercase text-decoration-none"}
                to="/contact"
              >
                contact
              </NavLink>

              <NavLink
                className={"text-uppercase text-decoration-none"}
                to="/dashboard/my_Appointments"
              >
                Appointments
              </NavLink>

              {user ? (
                <NavDropdown title={user?.displayName} id="basic-nav-dropdown">
                  <NavLink to={"/dashboard/profile"}>profile</NavLink>
                  <NavLink to={"/dashboard/my_Appointments"}>dashboard</NavLink>
                  {/* <NavDropdown.Divider /> */}
                  <MyButtonLg
                    action={() => {
                      signOut(auth);
                      localStorage.removeItem("accessToken");
                    }}
                    className={"header-btn"}
                    style={{
                      width: "100%",
                      padding: "5px 0",
                      background: "#1f2278",
                    }}
                  >
                    {" "}
                    signOut
                  </MyButtonLg>
                </NavDropdown>
              ) : (
                <MyButtonLg
                  action={() => navigate("/login")}
                  className={"header-btn"}
                  style={{
                    width: "150px",
                    padding: "7px 0",
                    background: "#e1e2f6",
                    color: "#1f2278",
                  }}
                >
                  {" "}
                  login
                </MyButtonLg>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
