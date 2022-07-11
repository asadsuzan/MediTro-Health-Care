import { async } from "@firebase/util";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useAuthState, useUpdateProfile } from "react-firebase-hooks/auth";
import auth from "../../firebaseConfig";
import "./UserProfile.css";
import { getStorage, ref, uploadBytes } from "firebase/storage";

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

  const getData = (email) => {
    const url = `http://localhost:5000/profile/${email}`;
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

    const url = `http://localhost:5000/profile/${user?.email}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="appointment-body profile-body">
      <div className="p-photo">
        <figure>
          {user?.photoURL ? (
            <img
              src={user?.photoURL}
              alt={user?.displayName}
              className="img fluid"
            />
          ) : (
            <div className="p-alt">nai</div>
          )}
        </figure>
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
              />
            ) : (
              <select
                name="bGroup"
                type="text"
                onChange={(e) => setBloodGroup(e.target.value)}
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
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div className="info-group">
            <label htmlFor="zip">Zip Code</label>
            <input
              type="text"
              name="zip"
              value={zipCode && zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />
          </div>
          <div className="info-group">
            <label htmlFor="submit" style={{ opacity: "0" }}>
              xxxx
            </label>
            <input type="submit" value={"SAVE"} className="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
