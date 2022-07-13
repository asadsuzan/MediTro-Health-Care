import { async } from "@firebase/util";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useAuthState, useUpdateProfile } from "react-firebase-hooks/auth";
import auth from "../../firebaseConfig";
import "./UserProfile.css";
import { toast } from "react-toastify";
import { TiEdit } from "react-icons/ti";

const UserProfile = () => {
  const [user] = useAuthState(auth);
  const [birthDay, setBirthDay] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [textType, setTextType] = useState("text");
  const [selectType, setSelectType] = useState(true);
  const [disabled, setDisabled] = useState(true);

  const getData = (email) => {
    const url = `https://meditro.herokuapp.com/profile/${email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const { birthDay, bloodGroup, city, country, state, zipCode } = data;
        setBirthDay(birthDay);
        setBloodGroup(bloodGroup);
        setCity(city);
        setCountry(country);
        setState(state);
        setZipCode(zipCode);
      });
  };
  useEffect(() => {
    getData(user?.email);
  }, [user]);
  const updateInfo = (e) => {
    e.preventDefault();

    const updatedData = { birthDay, city, country, zipCode, bloodGroup, state };

    const url = `https://meditro.herokuapp.com/profile/${user?.email}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        setDisabled(true);
        toast("SAVED");
      });
  };

  return (
    <div className="appointment-body profile-body  ">
      <div className="p-photo d-flex justify-content-between align-items-center">
        <figure>
          {user?.photoURL ? (
            <img
              src={user?.photoURL}
              alt={user?.displayName}
              className="img fluid"
            />
          ) : (
            <div className="p-alt text-success fs-1">{user?.displayName}</div>
          )}
        </figure>
        <div
          title="Edit Info"
          className="edit-btn"
          onClick={() => setDisabled(!disabled)}
          style={{ cursor: "pointer" }}
        >
          <TiEdit size={"2rem"} color="#b12ef7" />
        </div>
      </div>
      {/* user info */}
      <div>
        <form className="user-info" onSubmit={updateInfo}>
          <div className="info-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={user?.displayName}
              autoComplete="off"
              disabled
              readOnly
            />
          </div>
          <div className="info-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={user?.email}
              autoComplete="off"
              disabled
              readOnly
            />
          </div>
          <div className="info-group">
            <label htmlFor="birth">Date of Birth</label>
            <input
              type={textType}
              name="birth"
              autoComplete="off"
              className="date-type"
              onFocus={() => setTextType("date")}
              onBlur={() => setTextType("text")}
              value={birthDay && birthDay}
              onChange={(e) => setBirthDay(e.target.value)}
              disabled={disabled}
            />
          </div>
          <div
            className="info-group"
            onFocus={() => setSelectType(false)}
            onBlur={() => setSelectType(true)}
          >
            <label htmlFor="bGroup">Blood Group </label>
            {selectType ? (
              <input
                type={"text"}
                name="bGroup"
                value={bloodGroup && bloodGroup}
                onChange={(e) => setBloodGroup(e.target.value)}
                autoComplete="off"
                disabled={disabled}
              />
            ) : (
              <select
                name="bGroup"
                type="text"
                onChange={(e) => setBloodGroup(e.target.value)}
                disabled={disabled}
              >
                <option value="a-">a-</option>
                <option value="a+">a+</option>
                <option value="b+">b+</option>
                <option value="b-">b-</option>
                <option value="ab+">ab+</option>
                <option value="ab-">ab-</option>
                <option value="o+">o+</option>
                <option value="o-">o-</option>
              </select>
            )}
          </div>
          <div className="info-group">
            <label htmlFor="city">city</label>
            <input
              type="text"
              name="city"
              autoComplete="off"
              value={city && city}
              disabled={disabled}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="info-group">
            <label htmlFor="state">state</label>
            <input
              type="text"
              name="state"
              autoComplete="off"
              value={state && state}
              disabled={disabled}
              onChange={(e) => setState(e.target.value)}
            />
          </div>
          <div className="info-group">
            <label htmlFor="country">country</label>
            <input
              type="text"
              name="country"
              autoComplete="off"
              value={country && country}
              disabled={disabled}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div className="info-group">
            <label htmlFor="zip">Zip Code</label>
            <input
              type="text"
              name="zip"
              value={zipCode && zipCode}
              disabled={disabled}
              onChange={(e) => setZipCode(e.target.value)}
            />
          </div>
          <div className="info-group">
            <input
              disabled={disabled}
              type="submit"
              value={"SAVE"}
              className={`submit ${disabled && "bg-transparent text-dark"}`}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
