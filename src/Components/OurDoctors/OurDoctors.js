import React, { useEffect } from "react";
import { useState } from "react";
import { UseDoctors } from "../../hooks";
import { AiOutlineTags } from "react-icons/ai";
import { BiTime } from "react-icons/bi";
import { FaMoneyBillAlt } from "react-icons/fa";
import "./OurDoctors.css";
import { MyButtonLg } from "../MyButtons/MyButtons";
import SectionTitle from "../SectionTitle/SectionTitle";
import { OverlayBg1, OverlayBg6, OverlayBg8 } from "../OverlayBg/OverlayBg";

const OurDoctors = () => {
  const [doctors] = UseDoctors();
  const [newDoctors, setNewDoctors] = useState([]);
  const [activeTab, SetActiveTab] = useState(0);
  const tabBtn = [...new Set(doctors.map((doctor) => doctor.expertise)), "all"];

  const handleDoctors = (expertise, active) => {
    const filterDoctors = doctors.filter(
      (doctor) => doctor.expertise === expertise
    );
    setNewDoctors(filterDoctors);
    SetActiveTab(active);
    if (expertise === "all") {
      setNewDoctors(doctors);
    }
  };

  useEffect(() => {
    const featuresDoctors = doctors.filter(
      (element) => element.expertise === "neurology"
    );
    setNewDoctors(featuresDoctors);
  }, [doctors]);

  return (
    <div className="our-doctors position-relative">
      <div className="container">
        <SectionTitle style={{ textAlign: "center" }}>
          <h6>our doctors</h6>
          <h2>Meet Best Doctors</h2>
        </SectionTitle>

        {/* filter buttons */}

        <div className="filter-tab d-flex my-5" style={{ gap: "10px" }}>
          {tabBtn.map((element, index) => (
            <MyButtonLg
              key={index}
              style={{
                background: "#e1e2f6",
                padding: "10px 0",
                width: "130px",
                color: "#1f2278",
                fontSize: "10px",
              }}
              action={() => handleDoctors(element, index)}
              className={`${activeTab === index && "activeTab"}`}
            >
              {element}
            </MyButtonLg>
          ))}
        </div>

        <div className="doctors-wrapper">
          {newDoctors.map((doctor, id) => {
            const { name, degree, expertise, period, fees, thumb } = doctor;
            return (
              <div key={id} className="doctor">
                <figure>
                  <img src={thumb} alt={name} className="img-fluid" />
                </figure>
                <div className="p-2">
                  <div>
                    <b>
                      <small>
                        {" "}
                        <AiOutlineTags />
                        {expertise}
                      </small>
                    </b>
                    <h6>{name}</h6>
                    <p>{degree}</p>
                  </div>
                  <div>
                    <p>
                      <BiTime />
                      {period}
                    </p>
                    <p>
                      <FaMoneyBillAlt />
                      {fees}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <OverlayBg1 style={{ bottom: "-10%", right: "0%" }} />
      <OverlayBg8 style={{ bottom: "-10%", left: "0%" }} />
      <OverlayBg6 style={{ top: "48%", left: "50%" }} />
    </div>
  );
};

export default OurDoctors;
