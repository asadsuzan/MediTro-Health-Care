const { useState, useEffect } = require("react");

const UseServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
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

export { UseServices, UseDoctors, UseFacilities };
