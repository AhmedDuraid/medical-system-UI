import React, { useState } from "react";
import { TextInput, Button, Container, Badge } from "react-materialize";
import axios from "axios";

const PatientWightEnter = () => {
  const [patientID, setPatientID] = useState();
  const [enteredPatientWeight, setEnteredPatientWeight] = useState();
  const [didFind, setDidFind] = useState(false);
  const [weightArray, setWeightArray] = useState();

  const [disable, setDisable] = useState(false);

  const sendPatientProgreesWight = () => {
    // {progress:[{weight:Number}]}

    // add new weight to old
    const arr = weightArray;
    arr.push({ weight: enteredPatientWeight });

    const dataObject = { progress: arr };
    axios
      .put(`http://localhost:1000/api/patient_profile/${patientID}`, dataObject)
      .then((e) => {
        console.log(e);
        setDisable(true);
      })
      .catch(() => {
        setDisable(false);
      });
  };

  const getPatient = () => {
    axios
      .get(`http://localhost:1000/api/patient_profile/${patientID}`)
      .then((axiosData) => {
        setPatientID(axiosData.data.data._id);
        setWeightArray(axiosData.data.data.progress);
        setDidFind(true);
      });
  };
  console.log(patientID);

  return (
    <Container>
      {!didFind ? (
        <React.Fragment>
          <TextInput
            label="patient ID "
            onChange={(e) => setPatientID(e.target.value)}
          />
          <Button small onClick={getPatient}>
            search
          </Button>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <TextInput
            label="weight (Number)"
            onChange={(e) => setEnteredPatientWeight(e.target.value)}
          />

          <Button small onClick={sendPatientProgreesWight}>
            Enter Wight
          </Button>
          <Button small onClick={() => setDidFind(false)}>
            add other
          </Button>
          {disable ? <Badge>patient has been updated</Badge> : null}
        </React.Fragment>
      )}
    </Container>
  );
};

export default PatientWightEnter;
