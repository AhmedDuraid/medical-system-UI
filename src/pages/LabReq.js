import React, { useState, useEffect } from "react";
import { Container, TextInput, Button, Table } from "react-materialize";
import axios from "axios";

const LabReq = () => {
  const [patientInfo, setPatientInfo] = useState({ labReq: null });
  const [patientId, setPatientId] = useState(null);
  const [oldPatientLabTests, setOldPatientLabTests] = useState(null);

  const [patientLabInput, setPatientLabInput] = useState();

  const [activePatient, setActivePatient] = useState();

  useEffect(() => {
    axios.get("http://localhost:1000/api/patient_profile/").then((patients) => {
      setActivePatient(patients.data.data);
    });
  }, []);

  const findPatientHandler = () => {
    axios
      .get(`http://localhost:1000/api/patient_profile/${patientId}`)
      .then((APIData) => {
        const { _id, labReq } = APIData.data.data;
        setOldPatientLabTests(labReq);
        setPatientId(_id);
      });
  };

  const setLabReqHandler = () => {
    // set the new lab test
    setOldPatientLabTests([...oldPatientLabTests, patientLabInput]);
    axios
      .put(`http://localhost:1000/api/patient_profile/${patientId}`, {
        labReq: oldPatientLabTests,
      })
      .then((d) => {
        console.log(d);
      });
  };

  console.log("lab array", oldPatientLabTests);

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>Active patient ID</th>
          </tr>
        </thead>
        <tbody>
          {activePatient
            ? activePatient.map((patients, index) => (
                <tr key={index}>{patients.patientID}</tr>
              ))
            : null}
        </tbody>
      </Table>
      {!oldPatientLabTests ? (
        <React.Fragment>
          <TextInput
            label="patient ID"
            onChange={(e) => setPatientId(e.target.value)}
          />
          <Button onClick={findPatientHandler}>Go</Button>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <TextInput
            onChange={(e) => setPatientLabInput({ labTest: e.target.value })}
            label="lab Test"
          />
          <Button onClick={setLabReqHandler}>Enter Test</Button>
          <Button onClick={() => setOldPatientLabTests()}>other patient</Button>
        </React.Fragment>
      )}
    </Container>
  );
};

export default LabReq;
