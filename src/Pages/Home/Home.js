import React from "react";
import AboutUs from "../../Components/AboutUs/AboutUs";
import Facilities from "../../Components/Facilities/Facilities";
import HeroBanner from "../../Components/HeroBanner/HeroBanner";
import OurDoctors from "../../Components/OurDoctors/OurDoctors";
import ServiceSlide from "../../Components/ServiceSlide/ServiceSlide";
import WorkProcess from "../../Components/WorkProcess/WorkProcess";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <section>
        {" "}
        <AboutUs />
      </section>
      <section>
        {" "}
        <WorkProcess />
      </section>
      <section>
        {" "}
        <ServiceSlide />
      </section>
      <section>
        {" "}
        <Facilities />
      </section>
      <section>
        {" "}
        <OurDoctors />
      </section>
    </>
  );
};

export default Home;
