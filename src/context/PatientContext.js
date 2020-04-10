import React, { useState, createContext } from "react";

// context
export const PatientContext = createContext();

// provider
export const PatientProvider = (props) => {
  const [patients, setPatients] = useState([]);

  return (
    <PatientContext.Provider value={[patients, setPatients]}>
      {props.children}
    </PatientContext.Provider>
  );
};
