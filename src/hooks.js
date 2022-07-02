const { useState, useEffect } = require("react");

const UseServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return [services, setServices];
};

const UseDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("doctors.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return [doctors, setDoctors];
};

const UseFacilities = () => {
  const [facilities, setFacilities] = useState([]);

  useEffect(() => {
    fetch("facilities.json")
      .then((res) => res.json())
      .then((data) => setFacilities(data));
  }, []);

  return [facilities, setFacilities];
};
const UseService = (id) => {
  const [service, setService] = useState({});
  const url = `http://localhost:5000/service/${id}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [url]);

  return [service, setService];
};
const UseToken = (user) => {
  const [token, setToken] = useState();

  useEffect(() => {
    const email = user?.user?.email;
    const newUser = { email: email };
    const url = `http://localhost:5000/login/${email}`;

    if (email) {
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newUser),
      })
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("accessToken", data.token);
          console.log(data.token);
          setToken(data);
        });
    }
  }, [user]);

  return [token, setToken];
};

export { UseServices, UseDoctors, UseFacilities, UseService, UseToken };
