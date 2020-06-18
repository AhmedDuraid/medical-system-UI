import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  Container,
  TextInput,
  Button,
  ProgressBar,
} from "react-materialize";

const LabRes = () => {
  const [patients, setPatients] = useState();
  const [labInput, setLabInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [reloadData, setReloadData] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:1000/api/patient_profile/")
      .then((patients) => {
        setPatients(patients.data.data);
      })
      .then(() => {
        setLoading(false);
        console.log("useEffect");
      });
  }, [reloadData]);

  const labResHandler = (patientId, labId) => {
    // set loading
    setLoading(true);
    // take the patient array
    let patientArray = [...patients];
    // find patient by Id
    let findPatient = patientArray.find((element) => element._id === patientId);
    // find the lab test by id
    let findLab = findPatient.labReq.find((eachLab) => eachLab._id === labId);
    // change the state to false
    findLab.isActive = false;

    // add the new lab res to the patient
    findPatient.labRes.push({
      labTestName: findLab.labTest,
      labRes: labInput,
      patinetId: findPatient._id,
    });
    // axios
    //   .get(`http://localhost:1000/api/patient_profile/${findPatient._id}`)
    //   .then((e) => console.log(e.data));

    axios
      .put(`http://localhost:1000/api/patient_profile/${findPatient._id}`, {
        labReq: findPatient.labReq,
        labRes: findPatient.labRes,
      })
      .then((e) => setReloadData(!reloadData));
  };

  return (
    <Container>
      {loading ? (
        <ProgressBar />
      ) : (
        <Table>
          <thead>
            <tr>
              <th>Patient ID</th>
              <th>lab Test</th>
              <th>Date</th>
              <th>Is active</th>
              <th>lab Res</th>
            </tr>
          </thead>
          <tbody>
            {patients
              ? patients.map((patient, index) => {
                  return patient.labReq.map((eachLab) => {
                    if (eachLab.isActive) {
                      return (
                        <tr>
                          <td>{patient.patientID}</td>
                          <td>{eachLab.labTest}</td>
                          <td>{eachLab.date}</td>
                          <td>{eachLab.isActive ? "Yes" : "No"}</td>
                          <td>
                            <TextInput
                              label="what is your res"
                              onChange={(e) => setLabInput(e.target.value)}
                            />
                            <Button
                              floating
                              onClick={() =>
                                labResHandler(patient._id, eachLab._id)
                              }
                            >
                              Add
                            </Button>
                          </td>
                        </tr>
                      );
                    } else return null;
                  });
                })
              : null}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default LabRes;
