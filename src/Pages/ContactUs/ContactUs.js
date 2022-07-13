import React from "react";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { GoLocation } from "react-icons/go";
import { MdContactMail } from "react-icons/md";
import { toast } from "react-toastify";

import "./ContactUs.css";

const ContactUs = () => {
  const handleSendMsg = (e) => {
    e.preventDefault();
    toast.success("Message Send !", {
      position: toast.POSITION.BOTTOM_CENTER,
    });
    e.target.reset();
  };

  return (
    <>
      <Header />
      <Banner page={"contact us"} />
      <div className="container mt-5 section contact-section shadow-lg bg-light">
        <div className="contact-form ">
          <form onSubmit={handleSendMsg}>
            <div className="c-group">
              <label htmlFor="name">name</label>
              <input required type="text" name="name" />
            </div>
            <div className="c-group">
              <label htmlFor="email">email</label>
              <input required type="email" name="email" />
            </div>
            <div className="c-group">
              <label htmlFor="sub">subject</label>
              <input required type="text" name="sub" />
            </div>
            <div className="c-group">
              <label htmlFor="msg">message</label>
              <textarea required name="" id="" cols="30" rows="10"></textarea>
            </div>
            <input type="submit" value={"SEND"} className="msg-btn" />
          </form>
        </div>
        <div className="contact-info">
          <div className="c-info-heading">Contact Us For Any Information</div>
          {/* info */}
          <div className="c-info-group">
            <div>
              <GoLocation /> <span>Location</span>
            </div>

            <p>
              Contact Us For Any Informations Location 2005 Stokes Isle Apt.
              896, Venaville 10010, USA
            </p>
          </div>
          {/* info */}
          {/* info */}
          <div className="c-info-group">
            <div>
              <MdContactMail /> <span>Email & Phone</span>
            </div>

            <p>
              <span>asadsuzan7@gmail.com</span>
              <span>(+880) 1414010594</span>
            </p>
          </div>
          {/* info */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
