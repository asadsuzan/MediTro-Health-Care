import React from "react";
import { useState } from "react";
import "./UserAppointment.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import auth from "../../firebaseConfig";
import { UseAdmin } from "../../hooks";
import Loading from "../Loading/Loading";
import { MyButtonLg } from "../MyButtons/MyButtons";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { MdDeleteForever } from "react-icons/md";

const UserAppointment = () => {
  const [appointment, setAppointment] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [isAdmin] = UseAdmin(user);
  const [today, setToday] = useState(new Date().toISOString().slice(0, 10));

  // load appointments
  const loadAppointments = (user) => {
    fetch(`https://meditro.herokuapp.com/my_appointment/${user?.email}`, {
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
    const url = `https://meditro.herokuapp.com/appointment?email=${user?.email}&id=${id}`;

    fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ stage: stage }),
    })
      .then((res) => res.json())
      .then((data) => {
        loadAppointments(user);
        if (stage === "complete") {
          toast.success(`Set as complete`, {
            position: toast.POSITION.BOTTOM_CENTER,
          });
        } else {
          toast.warn(`Set as Pending`, {
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      });
  };

  // delete appointment for admin
  const deleteAppointment = (id) => {
    const isConfirm = window.confirm("Want To Remove ?");
    const url = `https://meditro.herokuapp.com/appointments/${id}`;
    if (isConfirm) {
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          loadAppointments(user);
          toast.info("Removed !", {
            position: toast.POSITION.BOTTOM_CENTER,
          });
        });
    }
  };

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="appointment-body">
      {appointment.length ? (
        <>
          {/* filtering tab */}
          <div className="text-light d-flex fixed">
            {isAdmin && (
              <input
                className="rounded rounded-5"
                type="text"
                placeholder="search by email"
                onChange={(e) => setQuery(e.target.value)}
              />
            )}
            <select className="" onChange={(e) => setQuery(e.target.value)}>
              <option value="">All</option>
              <option value="pending">pending</option>
              <option value="complete">complete</option>
              <option value={today}>Today</option>
            </select>
          </div>
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
              {appointment
                .filter(
                  (a) =>
                    a.email.toLowerCase().includes(query) ||
                    a.stage.toLowerCase().includes(query) ||
                    a.appointmentDate.includes(query)
                )
                ?.map((data, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td className="text-dark text-capitalize">
                        {data.serviceName}
                      </td>
                      <td>
                        <span className="time">{data.appointmentTime}</span>{" "}
                        <br />
                        <span
                          className={`date mt-1 d-inline-block ${
                            data.appointmentDate === today &&
                            "bg-light text-success"
                          }`}
                        >
                          {data.appointmentDate}
                        </span>
                      </td>
                      <td>
                        <span className="time">{data.bookingTime}</span> <br />
                        <span className="date">{data.bookingDate}</span>
                      </td>
                      <td>${data.amount}</td>
                      <td className="text-success fw-bold">
                        <p
                          className={data.stage === "pending" && "text-danger"}
                        >
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
                            title="REMOVE"
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
        </>
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
