import React from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import { MyButtonLg } from "../../Components/MyButtons/MyButtons";
import auth from "../../firebaseConfig";
import { UseService } from "../../hooks";
import "./Booking.css";

const Booking = () => {
  const { id } = useParams();
  const [service] = UseService(id);
  const [user] = useAuthState(auth);
  const [date, SetDate] = useState("");
  const [time, SetTime] = useState("");
  return (
    <>
      <Header />
      <div className="booking-from-container section">
        <div className="container">
          <div className="row justify-content-center align-items-center gy-5">
            {/* left side for form */}
            <div className="col-xl-7 col-lg-7 col-md-12 col-12">
              <div className="information">
                <h4 className="text-capitalize py-3">personal information</h4>
                <form action="">
                  <div className="input-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      placeholder={user.displayName}
                      name="name"
                    />
                  </div>

                  <div className="input-group">
                    <label htmlFor="email">Your Email</label>
                    <input type="email" placeholder={user.email} name="email" />
                  </div>
                  <div className="input-group">
                    <label htmlFor="number">Your Number</label>
                    <input
                      type="email"
                      placeholder={"01XXXXXXX"}
                      name="email"
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="slot">Select Time</label>
                    <select
                      name="slot"
                      onChange={(e) => SetTime(e.target.value)}
                    >
                      {service?.slots?.map((slot, index) => {
                        return <option key={index}>{slot}</option>;
                      })}
                    </select>
                  </div>
                  <div className="input-group">
                    <label htmlFor="date">Select Date</label>
                    <input
                      type="date"
                      name="date"
                      onChange={(e) => SetDate(e.target.value)}
                    />
                  </div>
                  <MyButtonLg
                    style={{
                      width: "100%",
                      background: "#1f2278",
                      color: "#fff",
                      padding: "10px",
                    }}
                  >
                    confirm
                  </MyButtonLg>
                </form>
              </div>
            </div>
            {/* right side for summary */}
            <div className="col-xl-5 col-lg-5 col-md-12 col-12">
              <div className="booking-summary border border-1 shadow-sm">
                <span className="summary-title">Booking Summary</span>
                <hr />
                <figure
                  className="d-flex align-items-center h-100"
                  style={{ gap: "15px" }}
                >
                  <img
                    src={service.thumb}
                    alt={service.name}
                    className="img-fluid"
                  />
                  <div>
                    {" "}
                    <h6>{service.name}</h6>
                    <p>{service.description}</p>
                  </div>
                </figure>

                <div className="d-flex justify-content-between">
                  <div>
                    <p>date</p>
                    <p>time</p>
                    <p>Consulting Fee</p>
                    <p>Booking Fee</p>
                  </div>

                  <div className="text-end">
                    <p className={!date && "text-danger"}>
                      {date ? date : "N/A"}
                    </p>
                    <p className={!time && "text-danger"}>
                      {time ? time : "N/A"}
                    </p>
                    <p>${service.bookingFee}</p>
                    <p>${service.consultingFee}</p>
                  </div>
                </div>
                <hr />
                <div className="d-flex justify-content-between text-end">
                  <p className="fs-5">total</p>
                  <p className="fs-5">
                    ${+service.bookingFee + service.consultingFee}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
