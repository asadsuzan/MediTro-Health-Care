import {
  OverlayBg1,
  OverlayBg2,
  OverlayBg3,
  OverlayBg4,
  OverlayBg5,
  OverlayBg6,
  OverlayBg7,
  OverlayBg8,
} from "../OverlayBg/OverlayBg";

import React from "react";
import aboutThumb1 from "../../assets/about-img/about1.jpg";
import aboutThumb2 from "../../assets/about-img/about2.jpg";
import aboutThumb3 from "../../assets/about-img/about3.jpg";
import Features from "../Features/Features";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="aboutUs position-relative">
      <div className="container">
        <div className="row align-items-center justify-content-center h-100">
          {/* left side */}
          <div className="col-xl-6 col-lg-9 col-md-12 col-sm-12 col-12 about-left">
            <div className="aboutUs-gallery">
              <div className="gallery-item">
                <figure>
                  <img src={aboutThumb1} alt="" className="img-fluid" />
                </figure>
              </div>
              <div className="gallery-item">
                <figure>
                  <img src={aboutThumb2} alt="" className="img-fluid" />
                </figure>
              </div>
              <div className="gallery-item">
                <figure>
                  <img src={aboutThumb3} alt="" className="img-fluid" />
                </figure>
              </div>
              <div className="gallery-item">
                <figure>
                  <img src={aboutThumb3} alt="" className="img-fluid" />
                </figure>
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12  about-right">
            <div className="aboutUs-content">
              <SectionTitle style={{ textAlign: "left" }}>
                <h6>about us</h6>
                <h2>The Great Place Of Medical Hospital Center</h2>
              </SectionTitle>
              <p>
                We provide the special tips and advice’s of heath care treatment
                and high level of best technology involve in the our hospital.
              </p>
              <Features />
            </div>
          </div>
        </div>
      </div>
      {/* for overlay background */}
      <OverlayBg3 style={{ top: "20%", right: "25%" }} />
      <OverlayBg7 style={{ bottom: "0", right: "20%" }} />
      <OverlayBg2 style={{ bottom: "0", right: "50%" }} />
    </div>
  );
};

export default AboutUs;
