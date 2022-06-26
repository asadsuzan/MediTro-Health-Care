import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";

const Booking = () => {
  const { id } = useParams();
  return (
    <>
      <Header />
      <div>Booking for {id}</div>
    </>
  );
};

export default Booking;
