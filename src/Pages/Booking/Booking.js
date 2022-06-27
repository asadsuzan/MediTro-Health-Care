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
  console.log(service);
  const [user] = useAuthState(auth);
  return (
    <>
      <Header />
      <div className="booking-from-container my">
        <div className="container">
          <div className="row">
            {/* left side for form */}
            <div className="col-xl-7 col-lg-7 col-md-7 col-12">
              <div className="information">
                <h2>personal information</h2>
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
                    <select name="slot">
                      {service?.slots?.map((slot, index) => {
                        return <option key={index}>{slot}</option>;
                      })}
                    </select>
                  </div>
                  <div className="input-group">
                    <label htmlFor="date">Select Date</label>
                    <input type="date" name="date" />
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
            <div className="col-xl-7 col-lg-7 col-md-7 col-12"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
