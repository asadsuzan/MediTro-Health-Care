import React from "react";
import featureIcon1 from "../../assets/features-icon/36c2306c-6dfe-4bcc-b35d-9800d52ff2de.svg";
import featureIcon2 from "../../assets/features-icon/4922db64-349d-4e40-ae0a-5872bc012607.svg";
import featureIcon3 from "../../assets/features-icon/ab7ad438-e320-414e-a206-28e1752343dd.svg";
import featureIcon4 from "../../assets/features-icon/d7d3df0c-daae-49e7-83a2-682ff0bdf44b.svg";
import "./Features.css";

const Features = () => {
  return (
    <div className="features">
      <div className="features-item">
        <img src={featureIcon1} alt="features-icon" />
        <p>Emergency Help</p>
      </div>
      <div className="features-item">
        <img src={featureIcon2} alt="features-icon" />
        <p>Qualified Doctors</p>
      </div>
      <div className="features-item">
        <img src={featureIcon3} alt="features-icon" />
        <p>Best Professionals</p>
      </div>
      <div className="features-item">
        <img src={featureIcon4} alt="features-icon" />
        <p>Medical Treatment</p>
      </div>
    </div>
  );
};

export default Features;
