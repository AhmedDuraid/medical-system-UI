import React, { useState } from "react";
import { Container, TextInput, Button, Badge } from "react-materialize";
import axios from "axios";

const DoctorNote = () => {
  const [patientId, setPatientId] = useState();
  const [patientInformation, setPatientInformation] = useState();
  const [disabled, setDisabled] = useState(false);
  const [disabledInSearch, setDisabledInSearch] = useState(false);

  const [newNoteInput, setNewNoteInput] = useState();
  const [showEdit, setShowEdit] = useState(false);

  const patientInformationHandler = () => {
    setDisabledInSearch(true);
    axios
      .get(`http://localhost:1000/api/patient_profile/${patientId}`)
      .then((axiosDataObject) => {
        setPatientId(axiosDataObject.data.data._id);
        setPatientInformation(axiosDataObject.data.data);
      })
      .then(() => {
        setShowEdit(!showEdit);
      });
  };

  const addNewNoteHandler = () => {
    let notes = patientInformation.doctorNote;
    notes.push({
      note: newNoteInput,
    });

    axios
      .put(`http://localhost:1000/api/patient_profile/${patientId}`, {
        doctorNote: notes,
      })
      .then((res) => {
        console.log(res);
        setDisabled(true);
      });

    console.log(notes);
  };

  const resetHandler = () => {
    setPatientId("");
    setDisabled(false);
    setDisabledInSearch(false);
    setShowEdit(false);
  };

  return (
    <Container>
      {!showEdit ? (
        <React.Fragment>
          <TextInput
            label="patient ID"
            onChange={(e) => setPatientId(e.target.value)}
            disabled={disabledInSearch}
          />
          <Button
            onClick={patientInformationHandler}
            disabled={disabledInSearch}
          >
            Search
          </Button>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <TextInput label="patient ID" value={patientId} disabled={true} />
          <TextInput
            label="add a new note"
            onChange={(e) => setNewNoteInput(e.target.value)}
            disabled={disabled}
          />
          <Button disabled={disabled} onClick={addNewNoteHandler}>
            Add
          </Button>
          <Button className="red" onClick={resetHandler}>
            Reset
          </Button>
          {disabled ? <Badge> note has been Adde</Badge> : null}
        </React.Fragment>
      )}
    </Container>
  );
};

export default DoctorNote;
