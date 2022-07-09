import { MyButtonLg } from "../MyButtons/MyButtons";
import React from "react";
import logo from "../../assets/logo/logo.png";
import fb from "../../assets/social/fb.png";
import linkedin from "../../assets/social/linkdin.png";
import insta from "../../assets/social/insta.png";
import tw from "../../assets/social/tw.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer ">
      <div className="container">
        <div className="row ">
          <div className="col-xl-4 col-lg-6 col-md-12 col-12">
            <div>
              <div className="f-title">
                <img src={logo} alt="meditro" className="f-logo" />
              </div>
              <p className="f-des">
                Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore
                smod tempor incididunt ut labore et.
              </p>
              <span className="pb-2 d-inline-block">Contact Us</span>
              <h3 className="">+088 1614010594</h3>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-12 col-12 d-flex justify-content-between">
            <ul className="f-links list-unstyled">
              <div className="f-title">Quick Links</div>
              <li> About Us</li>
              <li> Services</li>
              <li>Booking</li>
              <li>Faq's</li>
              <li>Blogs</li>
              <li>Out Team</li>
            </ul>

            <ul className="f-links list-unstyled">
              <div className="f-title">Our Service</div>
              <li> Dental Care</li>
              <li>Cardiac Clinic</li>
              <li>Massege Therapy</li>
              <li>Cardiology</li>
              <li>Precise Diagnosis</li>
              <li>Abmbulance Services</li>
            </ul>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-12 col-12">
            <div className="f-title">subscribe now</div>
            <form className="subscribe-form">
              <input
                type="email"
                placeholder="Email Address"
                className="form-control shadow-lg p-2"
              />{" "}
              <br />
              <MyButtonLg
                style={{
                  color: "white",
                  background: "#1f2278",
                  width: "100%",
                  padding: "10px 0",
                }}
              >
                subscribe now
              </MyButtonLg>
            </form>
            <div className="social-links d-flex">
              <img src={fb} alt="fb" className="img-fluid " />
              <img src={insta} alt="fb" className="img-fluid " />
              <img src={linkedin} alt="fb" className="img-fluid " />
              <img src={tw} alt="fb" className="img-fluid " />
            </div>
          </div>
        </div>
        <hr />
        <code className="text-center d-block">
          Copyright © 2022 Design & Developed by Asad Suzan
        </code>
      </div>
    </footer>
  );
};

export default Footer;
