import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Container } from "react-materialize";

const LabRes = () => {
  const [patients, setPatients] = useState();

  useEffect(() => {
    axios.get("http://localhost:1000/api/patient_profile/").then((patients) => {
      setPatients(patients.data.data);
    });
  }, []);

  console.log(patients);

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>Patient ID</th>
            <th>lab Test</th>
            <th>Date</th>
            <th>Is active</th>
          </tr>
        </thead>
        <tbody>
          {patients
            ? patients.map((patient, index) => {
                return patient.labReq.map((eachLab) => {
                  if (eachLab.isActive) {
                    return (
                      <tr>
                        <td>{patient._id}</td>
                        <td>{eachLab.labTest}</td>
                        <td>{eachLab.date}</td>
                        <td>{eachLab.isActive ? "Yes" : "No"}</td>
                      </tr>
                    );
                  } else return null;
                });
              })
            : null}
        </tbody>
      </Table>
    </Container>
  );
};

export default LabRes;
