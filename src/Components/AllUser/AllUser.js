import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import auth from "../../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import "./AllUser.css";
import Loading from "../Loading/Loading";

const AllUser = () => {
  const [users, setUsers] = useState([]);
  const [user] = useAuthState(auth);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`http://localhost:5000/users/${user?.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, [user]);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="users-body">
      {users.length ? (
        <table>
          <thead className="shadow-sm">
            <th> name</th>
            <th> id</th>
            <th> email</th>
            <th> role</th>
            <th>Actions</th>
          </thead>
          <tbody>
            {users.map((user) => {
              const { email, _id, userName, role } = user;
              return (
                <tr key={_id}>
                  <td className="text-dark text-capitalize">
                    {userName?.split(" ")[0]}
                  </td>
                  <td>
                    <span>{_id}</span>
                  </td>
                  <td className="text-dark">{email}</td>
                  <td className="text-success">{role ? role : "user"}</td>
                  <td className="text-danger">{role ? "" : "remove user"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <h1 className="text-danger text-center h-100 my-5">EMPTY</h1>
      )}
    </div>
  );
};

export default AllUser;
