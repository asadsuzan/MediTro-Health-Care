import { UseFacilities } from "../../hooks";
import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import facilityThumb from "../../assets/facilities/f.png";
import "./Facilities.css";
import { OverlayBg1, OverlayBg2, OverlayBg6 } from "../OverlayBg/OverlayBg";

const Facilities = () => {
  const [facilities] = UseFacilities();

  return (
    <div className="facilities position-relative">
      <div className="container">
        <div className="row align-items-center gy-5">
          {/* left side */}

          <div className="col-xl-4 col-lg-4 col-md-12 col-12">
            <div>
              <SectionTitle>
                <h6>Features</h6>
                <h2>Available in Our Clinic</h2>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </SectionTitle>
              <figure>
                <img src={facilityThumb} alt="Features" className="img-fluid" />
              </figure>
            </div>
          </div>

          {/* right side */}
          <div className="col-xl-8 col-lg-8 col-md-12 col-12 ">
            <div className="facility-wrapper">
              {facilities.map((facility, id) => {
                const { facilities, thumb } = facility;
                return (
                  <div key={id} className="facility shadow">
                    <figure>
                      <img src={thumb} alt="facility" className="img fluid" />
                    </figure>
                    <p className="text-center">{facilities}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <OverlayBg1 style={{ bottom: "-10%", right: "0%" }} />
      <OverlayBg2 style={{ bottom: "-10%", left: "0%" }} />
      <OverlayBg6 style={{ top: "48%", left: "50%" }} />
    </div>
  );
};

export default Facilities;
