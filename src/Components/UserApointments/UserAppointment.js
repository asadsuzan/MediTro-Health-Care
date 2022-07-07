import React from "react";
import { useState } from "react";
import "./UserAppointment.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import auth from "../../firebaseConfig";
import { UseAdmin, UseService } from "../../hooks";
import Loading from "../Loading/Loading";
import { MyButtonLg } from "../MyButtons/MyButtons";
import { useNavigate } from "react-router-dom";
import { async } from "@firebase/util";
import { MdDeleteForever } from "react-icons/md";

const UserAppointment = () => {
  const [appointment, setAppointment] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [isAdmin] = UseAdmin(user);

  // load appointments
  // useEffect(() => {
  //   fetch(`http://localhost:5000/my_appointment/${user?.email}`, {
  //     method: "GET",
  //     headers: {
  //       authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setAppointment(data);

  //       setLoading(false);
  //     });
  // }, [user]);

  // load appointments
  const loadAppointments = (user) => {
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
  };
  useEffect(() => {
    loadAppointments(user);
  }, [user]);

  // change  pending/complete status  for admin
  const changStatus = (e, data) => {
    const stage = e.target.value;
    const id = data._id;
    const url = `http://localhost:5000/appointment?email=${user?.email}&id=${id}`;

    fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ stage: stage }),
    })
      .then((res) => res.json())
      .then((data) => loadAppointments(user));
  };

  // delete appointment for admin
  const deleteAppointment = (id) => {
    console.log(id);
    const url = `http://localhost:5000/appointments/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => loadAppointments(user));
  };

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="appointment-body">
      {appointment.length ? (
        <table>
          <thead className="shadow-sm">
            <tr>
              <th>#</th>
              <th>service</th>
              <th>appointment date</th>
              <th>booking date</th>
              <th>amount</th>
              <th>status</th>
              {isAdmin && <th>user</th>}
              {isAdmin && <th>actions</th>}
            </tr>
          </thead>
          <tbody>
            {appointment?.map((data, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td className="text-dark text-capitalize">
                    {data.serviceName}
                  </td>
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
                    <p className={data.stage === "pending" && "text-danger"}>
                      {data.stage}
                    </p>
                  </td>
                  {isAdmin && (
                    <td className="td-container" title={data.email}>
                      {data.email.slice(0, 4) + "..."}
                      <div className="td-item shadow-lg bg-dark text-light">
                        {data.email}
                      </div>
                    </td>
                  )}
                  {isAdmin && (
                    <td className="text-success fw-bold">
                      <select
                        title="change status"
                        onChange={(e) => changStatus(e, data)}
                        className="select-tab"
                      >
                        <option selected disabled hidden>
                          status
                        </option>

                        <option value="complete">completed</option>
                        <option value="pending">pending</option>
                      </select>{" "}
                      <br />
                      <button
                        onClick={() => deleteAppointment(data?._id)}
                        className="remover-btn"
                      >
                        <MdDeleteForever />
                      </button>
                    </td>
                  )}
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
