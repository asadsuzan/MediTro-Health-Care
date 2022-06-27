import Container from "react-bootstrap/Container";
import { useLocation, useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import { MyButtonLg } from "../MyButtons/MyButtons";
import "./Header.css";
import { useEffect } from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebaseConfig";
import { signOut } from "firebase/auth";

function Header() {
  const [sticky, setSticky] = useState(false);
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <>
      <div className="header-divider"></div>
      <Navbar
        expand="lg"
        className={`primary-header bg-light fixed-top ${
          sticky && "shadow-sm bg-light"
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
              {user ? (
                <MyButtonLg
                  action={() => signOut(auth)}
                  className={"header-btn"}
                  style={{
                    width: "150px",
                    padding: "10px 0",
                    background: "#1f2278",
                  }}
                >
                  {" "}
                  signOut
                </MyButtonLg>
              ) : (
                <MyButtonLg
                  action={() => navigate("/login")}
                  className={"header-btn"}
                  style={{
                    width: "160px",
                    padding: "10px 0",
                    background: "#1f2278",
                  }}
                >
                  {" "}
                  login/singUp
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
