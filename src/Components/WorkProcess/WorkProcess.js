import React from "react";
import { MyButtonLg } from "../MyButtons/MyButtons";
import { OverlayBg2, OverlayBg3, OverlayBg7 } from "../OverlayBg/OverlayBg";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./WorkProcess.css";
import { useNavigate } from "react-router-dom";

const WorkProcess = () => {
  const navigate = useNavigate();
  return (
    <div className="WorkProcess position-relative">
      <div className="container">
        <SectionTitle style={{ textAlign: "center" }}>
          <h6>Working Process</h6>
          <h2>How we works? </h2>
        </SectionTitle>
        <div className="WorkProcess-cards">
          <div className="WorkProcess-card shadow-lg bg-light">
            <h1>01</h1>
            <div>
              <h5>Make Appointment</h5>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of.
              </p>
            </div>
            <MyButtonLg
              action={() => navigate("/service")}
              style={{
                background: "#e1e2f6",
                color: "#565acf",
                width: "150px",
                padding: "10px 0",
              }}
            >
              view more
            </MyButtonLg>
          </div>
          <div className="WorkProcess-card active shadow-lg bg-light">
            <h1>02</h1>
            <div>
              <h5>Take Treatment</h5>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of.
              </p>
            </div>
            <MyButtonLg
              action={() => navigate("/service")}
              style={{
                background: "#e1e2f6",
                color: "#565acf",
                width: "150px",
                padding: "10px 0",
              }}
            >
              view more
            </MyButtonLg>
          </div>
          <div className="WorkProcess-card shadow-lg bg-light">
            <h1>03</h1>
            <div>
              <h5>Registration</h5>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of.
              </p>
            </div>
            <MyButtonLg
              action={() => navigate("/contact")}
              style={{
                background: "#e1e2f6",
                color: "#565acf",
                width: "150px",
                padding: "10px 0",
              }}
            >
              view more
            </MyButtonLg>
          </div>
        </div>
      </div>
      {/* for overlay background */}
      <OverlayBg3 style={{ top: "20%", right: "5%" }} />
      <OverlayBg7 style={{ top: "15%", right: "50%" }} />
      <OverlayBg2 style={{ bottom: "0", left: "5%" }} />
    </div>
  );
};

export default WorkProcess;
