import React from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams, useNavigate } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
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
  const bookingDate = new Date().toLocaleDateString();
  const bookingTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const navigate = useNavigate();
  const handleBooking = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const number = e.target.number.value;
    const appointmentTime = e.target.slot.value;
    const appointmentDate = e.target.date.value;

    const bookingInfo = {
      name,
      email,
      number,
      appointmentTime,
      appointmentDate,
      bookingDate,
      bookingTime,
      amount: +service.bookingFee + service.consultingFee,
      serviceId: id,
      serviceName: service.name,
      stage: "pending",
    };
    // console.log(bookingInfo);
    fetch("https://meditro.herokuapp.com/appointment", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(bookingInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.insertedId) {
          navigate(`/invoice/${data.insertedId}`);
        }
      });
    e.target.reset();
  };

  return (
    <>
      <Header />
      <Banner page={"BOOK NOW"} />
      <div
        className="booking-from-container section"
        style={{ marginTop: "120px" }}
      >
        <div className="container">
          <div className="row justify-content-center align-items-center gy-5">
            {/* left side for form */}
            <div className="col-xl-7 col-lg-7 col-md-12 col-12">
              <div className="information">
                <h4 className="text-capitalize py-3">personal information</h4>
                <form onSubmit={handleBooking}>
                  <div className="input-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      required
                      type="text"
                      value={user?.displayName}
                      readOnly
                      disabled
                      name="name"
                    />
                  </div>

                  <div className="input-group">
                    <label htmlFor="email">Your Email</label>
                    <input
                      required
                      type="email"
                      // placeholder={user.email}
                      value={user?.email}
                      name="email"
                      readOnly
                      disabled
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="number">Your Number</label>
                    <input
                      required
                      type="number"
                      placeholder={"01XXXXXXX"}
                      name="number"
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="slot">Select Time</label>
                    <select
                      required
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
                      required
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
                    <p className={`${date ? "" : "text-danger"}`}>
                      {date ? date : "N/A"}
                    </p>
                    <p className={`${time ? "" : "text-danger"}`}>
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
      <Footer />
    </>
  );
};

export default Booking;
