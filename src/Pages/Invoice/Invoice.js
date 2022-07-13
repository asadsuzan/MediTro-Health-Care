import React from "react";
import Header from "../../Components/Header/Header";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { FcApproval } from "react-icons/fc";
import "./Invoice.css";
import Footer from "../../Components/Footer/Footer";
import { MyButtonLg } from "../../Components/MyButtons/MyButtons";
import Loading from "../../Components/Loading/Loading";
import { toast } from "react-toastify";
const Invoice = () => {
  const { id } = useParams();
  const [invoice, setInvoice] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://meditro.herokuapp.com/invoice/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setInvoice(data);
        setLoading(false);
        toast.success("Thank You", {
          theme: "dark",
          position: toast.POSITION.BOTTOM_CENTER,
        });
      });
  }, [id]);
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Header />
      <div
        className="invoice d-flex justify-content-center align-items-center flex-column text-center shadow-sm"
        style={{ marginTop: "120px" }}
      >
        <FcApproval size={"5rem"} />
        <div>
          <h3 className="text-success">Appointment booked Successfully!</h3>
          <p className="fw-bold">
            Appointment booked for <span>{invoice.serviceName}</span> on <br />
            <span>{invoice.appointmentDate}</span> at{" "}
            <span>{invoice.appointmentTime}</span>
          </p>
        </div>
        <MyButtonLg
          action={() => navigate("/dashboard/my_Appointments")}
          style={{
            background: "#1f2278",
            width: "220px",
            padding: "10px",
          }}
        >
          view appointments
        </MyButtonLg>
      </div>
      <Footer />
    </>
  );
};

export default Invoice;
