import React from "react";
import { MyButtonLg } from "../MyButtons/MyButtons";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./WorkProcess.css";

const WorkProcess = () => {
  return (
    <div className="WorkProcess">
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
    </div>
  );
};

export default WorkProcess;