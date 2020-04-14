import React, { useContext } from "react";
import { PatientContext } from "../../context/PatientContext";

import axios from "axios";

import { Modal, Button, TextInput, Icon, Toast } from "react-materialize";
/*
can be improve more 
*/
const ListModal = () => {
  // get patient information
  const [patient, setPatient] = useContext(PatientContext);

  // to update the list after close
  const [update, setUpdate] = patient.update;

  //destructuring
  const modal = patient.openModal;

  const closeModalHandler = () => {
    // close the modal and update the state
    setPatient({ ...patient, openModal: false });
    setUpdate(!update);
  };

  const changeValueHandler = (key, event) => {
    let { patientInfo } = patient;
    if (
      patientInfo[key] === "phone" ||
      patientInfo[key] === "weight" ||
      patientInfo[key] === "height"
    ) {
      patientInfo[key] = +event.target.value;
      setPatient(patient);
    } else {
      patientInfo[key] = event.target.value;
      setPatient(patient);
    }
  };

  const updatehandler = () => {
    const route = "patient";
    const params = patient.patientInfo._id;
    axios
      .put(`http://localhost:1000/api/${route}/${params}`, patient.patientInfo)
      .then((res) => {
        closeModalHandler();
        console.log(`Http puy `);
      })
      .catch(() => {
        closeModalHandler();
      });
  };

  const deletePatientHandler = () => {
    const route = "patient";
    const params = patient.patientInfo._id;
    axios
      .delete(`http://localhost:1000/api/${route}/${params}`)
      .then((res) => {
        console.log(`patient deleted with id ${params}`);
        closeModalHandler();
      })
      .catch(() => {
        closeModalHandler();
      });
  };

  return (
    <React.Fragment>
      {modal ? (
        <Modal
          actions={[
            <Button flat modal="close" node="button" waves="green">
              Close
            </Button>,
          ]}
          bottomSheet={false}
          fixedFooter={false}
          header="Modal Header"
          id="list-modal"
          open={patient.openModal}
          options={{
            dismissible: true,
            endingTop: "10%",
            inDuration: 250,
            onCloseEnd: closeModalHandler,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            opacity: 0.5,
            outDuration: 250,
            preventScrolling: true,
            startingTop: "4%",
          }}
        >
          {/* all can be added in map or foreach need to check later */}
          <TextInput
            label="Id"
            defaultValue={patient.patientInfo._id}
            onChange={(event) => changeValueHandler("_id", event)}
            disabled
          />
          <TextInput
            label="Date Of Create"
            defaultValue={patient.patientInfo.dateOfCreate}
            onChange={(event) => changeValueHandler("dateOfCreate", event)}
            disabled
          />
          <TextInput
            label="First Name"
            defaultValue={patient.patientInfo.firstName}
            onChange={(event) => changeValueHandler("firstName", event)}
          />
          <TextInput
            label="Last Name"
            defaultValue={patient.patientInfo.lastName}
            onChange={(event) => changeValueHandler("lastName", event)}
          />
          <TextInput
            label="Date Of Birth"
            defaultValue={patient.patientInfo.dateOfBirth}
            onChange={(event) => changeValueHandler("dateOfBirth", event)}
            disabled
          />
          <TextInput
            label="Phone"
            defaultValue={
              // need to be string as default value
              patient.patientInfo.phone.toString()
            }
            onChange={(event) => changeValueHandler("phone", event)}
          />
          <TextInput
            label="address"
            defaultValue={patient.patientInfo.address}
            onChange={(event) => changeValueHandler("address", event)}
          />
          <TextInput
            label="Weight"
            defaultValue={
              // need to be string as default value
              patient.patientInfo.weight.toString()
            }
            onChange={(event) => changeValueHandler("weight", event)}
          />
          <TextInput
            label="Height"
            defaultValue={
              // need to be string as default value
              patient.patientInfo.height.toString()
            }
            onChange={(event) => changeValueHandler("height", event)}
          />
          <TextInput
            label="Nationality"
            defaultValue={patient.patientInfo.nationality}
            onChange={(event) => changeValueHandler("nationality", event)}
          />
          <TextInput
            label="Gender"
            defaultValue={patient.patientInfo.gender}
            onChange={(event) => changeValueHandler("gender", event)}
          />
          <Button waves="light" className=" black-text" onClick={updatehandler}>
            Update
            <Icon right>send</Icon>
          </Button>
          <Button
            waves="light"
            className="red black-text"
            onClick={deletePatientHandler}
          >
            Delete
            <Icon right>highlight_off</Icon>
          </Button>

          <Button
            waves="light"
            className="yellow black-text"
            onClick={closeModalHandler}
          >
            Close
            <Icon right>delete_forever</Icon>
          </Button>
        </Modal>
      ) : null}
    </React.Fragment>
  );
};

export default ListModal;
