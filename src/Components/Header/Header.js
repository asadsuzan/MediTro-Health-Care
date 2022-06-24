import Container from "react-bootstrap/Container";
import { useLocation } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import { MyButtonLg } from "../MyButtons/MyButtons";
import "./Header.css";

function Header() {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <>
      <div className="header-divider"></div>
      <Navbar
        expand="lg"
        className={`primary-header bg-light fixed-top ${
          pathname === "/" && "bg-transparent"
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
              {
                <MyButtonLg
                  className={"header-btn"}
                  style={{
                    width: "150px",
                    padding: "10px 0",
                    background: "#1f2278",
                  }}
                >
                  {" "}
                  login
                </MyButtonLg>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
