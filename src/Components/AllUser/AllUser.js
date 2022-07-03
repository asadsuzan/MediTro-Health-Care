import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import auth from "../../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import "./AllUser.css";

const AllUser = () => {
  const [users, setUsers] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    fetch(`http://localhost:5000/users/${user?.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [user]);

  return (
    <div className="users-body">
      {users.length ? (
        <table>
          <thead className="shadow-sm">
            <th>user name</th>
            <th>user id</th>
            <th>user email</th>
            <th>Actions</th>
          </thead>
          <tbody>
            {users.map((user) => {
              const { email, _id } = user;
              return (
                <tr key={_id}>
                  <td className="text-dark text-capitalize">user name</td>
                  <td>
                    <span>{_id}</span>
                  </td>
                  <td className="text-success">{email}</td>
                  <td className="text-danger">remove user</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        "nai"
      )}
    </div>
  );
};

export default AllUser;
