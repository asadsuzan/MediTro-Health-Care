import React from "react";
import AboutUs from "../../Components/AboutUs/AboutUs";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

const About = () => {
  return (
    <>
      <Header />
      <Banner page={"about us"} />
      <div className="about-page" style={{ marginTop: "100px" }}>
        {" "}
        <AboutUs />
      </div>
      <Footer />
    </>
  );
};

export default About;
