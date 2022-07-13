import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import auth from "../../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import "./AllUser.css";
import Loading from "../Loading/Loading";
import { MdDeleteForever } from "react-icons/md";

const AllUser = () => {
  const [users, setUsers] = useState([]);
  const [user] = useAuthState(auth);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetch(`https://meditro.herokuapp.com/users/${user?.email}`, {
  //     method: "GET",
  //     headers: {
  //       authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setUsers(data);
  //       setLoading(false);
  //     });
  // }, [user]);
  useEffect(() => {
    laodUsers(user);
  }, [user]);

  const laodUsers = (user) => {
    fetch(`https://meditro.herokuapp.com/users/${user?.email}`, {
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
  };

  const removeUser = (email) => {
    const url = `https://meditro.herokuapp.com/user/${email}`;
    const isConfirm = window.confirm(
      `This will remove user and each appointment of this current user. Are you sure?`
    );
    if (isConfirm) {
      fetch(url, {
        method: "DELETE",
        headers: {
          authorization: `Barer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => laodUsers(user));
    }
  };
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="users-body">
      {users.length ? (
        <table>
          <thead className="shadow-sm">
            <th> #</th>
            <th> name</th>
            <th> id</th>
            <th> email</th>
            <th> role</th>
            <th>Actions</th>
          </thead>
          <tbody>
            {users.map((user, index) => {
              const { email, _id, userName, role } = user;
              return (
                <tr key={_id}>
                  <td>{index + 1}</td>
                  <td className="text-dark text-capitalize">
                    {userName?.split(" ")[0]}
                  </td>
                  <td>
                    <span>{_id}</span>
                  </td>
                  <td className="text-dark">{email}</td>
                  <td className="text-success">{role ? role : "user"}</td>
                  <td className="text-danger">
                    {role ? (
                      ""
                    ) : (
                      <button
                        onClick={() => removeUser(email)}
                        title="remove"
                        className="remover-btn bg-transparent "
                      >
                        <MdDeleteForever />
                      </button>
                    )}
                  </td>
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
