import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import ServiceCard from "../../Components/ServiceCard/ServiceCard";

const Services = () => {
  return (
    <div>
      <Header />
      <div style={{ marginTop: "130px" }}>
        {" "}
        <ServiceCard />
      </div>
      <Footer />
    </div>
  );
};

export default Services;
