import React from "react";
import { useState } from "react";
import "./UserAppointment.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import auth from "../../firebaseConfig";
import { UseService } from "../../hooks";
import Loading from "../Loading/Loading";
import { MyButtonLg } from "../MyButtons/MyButtons";
import { useNavigate } from "react-router-dom";

const UserAppointment = () => {
  const [appointment, setAppointment] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/my_appointment/${user?.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAppointment(data);
        setLoading(false);
      });
  }, [user]);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="appointment-body">
      {appointment.length ? (
        <table>
          <thead className="shadow-sm">
            <tr>
              <th>service</th>
              <th>appointment date</th>
              <th>booking date</th>
              <th>amount</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            {appointment?.map((data, index) => {
              return (
                <tr key={index}>
                  <td>{data.serviceName}</td>
                  <td>
                    <span className="time">{data.appointmentTime}</span> <br />
                    <span className="date">{data.appointmentDate}</span>
                  </td>
                  <td>
                    <span className="time">{data.bookingTime}</span> <br />
                    <span className="date">{data.bookingDate}</span>
                  </td>
                  <td>${data.amount}</td>
                  <td className="text-success fw-bold">
                    <p>pending</p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div className="text-center d-massage">
          <h3>you have't no appointment yet</h3>
          <MyButtonLg
            action={() => navigate("/service")}
            style={{
              width: "250px",
              background: "#1f2278",
              padding: "10px 0",
            }}
          >
            book appointment
          </MyButtonLg>
        </div>
      )}
    </div>
  );
};

export default UserAppointment;
