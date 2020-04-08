import React, { useEffect, useState } from "react";

import { CardPanel, Button, Icon, ProgressBar } from "react-materialize";
import axios from "axios";

export default function Patients() {
  const [patients, setPatients] = useState([]);
  const [update, setUpadte] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  let maleNumber = 0;
  let femaleNumber = 0;
  let AVGWeight = 0;
  let AVGHeight = 0;

  useEffect(() => {
    getpatientHTTP();
  }, [update]);

  const getpatientHTTP = () => {
    setIsLoading(true);
    axios
      .get("http://localhost:1000/api/patient")
      .then((patientData) => {
        setPatients(patientData.data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  };

  if (patients.length > 0) {
    patients.map((patient) => {
      if (patient.gender === "M") {
        maleNumber += 1;
      } else {
        femaleNumber += 1;
      }

      if (patient.weight) {
        AVGWeight += patient.weight;
      }
      if (patient.height) {
        AVGHeight += patient.height;
      }
    });

    AVGHeight = AVGHeight / patients.length;
    AVGWeight = AVGWeight / patients.length;
  }

  return (
    <React.Fragment>
      {isLoading ? (
        <ProgressBar />
      ) : (
        <React.Fragment>
          <CardPanel className="teal  pink darken-4">
            <span className="white-text">
              No. patients : {patients.length}{" "}
            </span>
          </CardPanel>
          <CardPanel className="teal  pink darken-4">
            <span className="white-text">gender M : {maleNumber} </span>
          </CardPanel>
          <CardPanel className="teal  pink darken-4">
            <span className="white-text">gender F : {femaleNumber} </span>
          </CardPanel>
          <CardPanel className="teal  pink darken-4">
            <span className="white-text">AVG Weight : {AVGWeight} </span>
          </CardPanel>
          <CardPanel className="teal  pink darken-4">
            <span className="white-text">AVG Height : {AVGHeight} </span>
          </CardPanel>
          <Button
            className="red pulse"
            floating
            icon={<Icon>update</Icon>}
            large
            node="button"
            waves="light"
            onClick={() => setUpadte(!update)}
          />
        </React.Fragment>
      )}
    </React.Fragment>
  );
}
