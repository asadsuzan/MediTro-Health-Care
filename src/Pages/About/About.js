import React from "react";
import AboutUs from "../../Components/AboutUs/AboutUs";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

const About = () => {
  return (
    <>
      <Header />
      <div className="about-page" style={{ marginTop: "100px" }}>
        {" "}
        <AboutUs />
      </div>
      <Footer />
    </>
  );
};

export default About;
