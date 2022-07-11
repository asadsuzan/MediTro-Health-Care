import React from "react";
import { UseServices } from "../../hooks";
import { MyButtonLg } from "../MyButtons/MyButtons";
import { useNavigate } from "react-router-dom";
import "./ServiceCard.css";
import Loading from "../Loading/Loading";
import {
  OverlayBg1,
  OverlayBg2,
  OverlayBg3,
  OverlayBg6,
  OverlayBg7,
  OverlayBg8,
} from "../OverlayBg/OverlayBg";

const ServiceCard = () => {
  const [services] = UseServices();
  const navigate = useNavigate();
  if (services.length === 0) {
    return <Loading />;
  }
  return (
    <div className="all-services position-relative section">
      <div className="container">
        <div className="services-wrapper">
          {services.map((service) => {
            const { name, description, thumb, consultingFee, bookingFee, _id } =
              service;
            return (
              <div key={_id} className="service-item shadow-lg">
                <figure>
                  <img src={thumb} alt="service-icon" className="img-fluid" />
                </figure>
                <div>
                  <h5>{name}</h5>
                  <div className="d-flex s-fees justify-content-between">
                    <p>Consulting Fee: ${consultingFee}</p>
                    <p>Booking Fee: ${bookingFee}</p>
                  </div>
                  <p>{description}</p>
                </div>
                <MyButtonLg
                  className={"book-now-btn"}
                  action={() => navigate(`${_id}`)}
                  style={{
                    width: "150px",
                    padding: "10px 0",
                    background: "#e1e2f6",
                    color: "#565acf",
                  }}
                >
                  book now
                </MyButtonLg>
              </div>
            );
          })}
        </div>
      </div>
      {/* for overlay background */}
      <OverlayBg3 style={{ top: "0%", right: "0%" }} />
      <OverlayBg7 style={{ top: "0%", left: "0%" }} />
      <OverlayBg2 style={{ bottom: "-10%", left: "50%" }} />
      <OverlayBg1 style={{ bottom: "-10%", right: "0%" }} />
      <OverlayBg8 style={{ bottom: "-10%", left: "0%" }} />
      <OverlayBg6 style={{ top: "48%", left: "50%" }} />
    </div>
  );
};

export default ServiceCard;
