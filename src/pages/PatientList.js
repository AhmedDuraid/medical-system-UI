import React, { useState } from "react";
import PatientModal from "../components/List/PatientModal";

import { PatientProvider } from "../context/PatientContext";

import PatientList from "../components/List/PatientList";
import {
  Collapsible,
  CollapsibleItem,
  Icon,
  TextInput,
  Button,
  Badge,
  Table,
} from "react-materialize";
import axios from "axios";

const List = () => {
  const [patientId, setPatientId] = useState();
  const [patientInformation, setPatientInformation] = useState();
  const [error, setError] = useState(false);
  const [disable, setDisable] = useState(false);

  const searchPatientByIDHandler = () => {
    setPatientInformation();
    setError(false);
    setDisable(true);
    axios
      .get(`http://localhost:1000/api/patient/${patientId}`)
      .then((e) => {
        setPatientInformation([e.data.data]);
        setError(false);
        setDisable(false);
      })
      .catch((d) => {
        setError(true);
        setDisable(false);
      });
  };

  const searchPatientByFirstNameHandler = () => {
    setPatientInformation();
    setError(false);
    setDisable(true);
    axios
      .get(`http://localhost:1000/api/patient/name/${patientId}`)
      .then((e) => {
        setPatientInformation(e.data.data);
        setError(false);
        setDisable(false);
      })
      .catch((d) => {
        setError(true);
        setDisable(false);
      });
  };
  console.log(patientInformation);

  return (
    <PatientProvider>
      <Collapsible accordion popout>
        <CollapsibleItem
          expanded={false}
          header="Patients"
          icon={<Icon>face</Icon>}
          node="div"
        >
          <PatientList />
        </CollapsibleItem>
      </Collapsible>
      <TextInput
        disabled={disable}
        onChange={(e) => setPatientId(e.target.value)}
        label="search for patient ID/first name"
      />
      <Button
        small
        disabled={disable}
        onClick={searchPatientByFirstNameHandler}
      >
        search by name
      </Button>

      <Button small disabled={disable} onClick={searchPatientByIDHandler}>
        search by ID
      </Button>
      {error ? (
        <Badge>there is no user name with this first name or Id</Badge>
      ) : null}

      {patientInformation ? (
        <Table>
          <thead>
            <tr>
              <th>_id</th>
              <th>user name</th>
              <th>first Name</th>
              <th>lastName</th>
              <th>date Of Birth</th>
              <th>phone</th>
              <th>email</th>
              <th>address</th>
              <th>nationality</th>
              <th>weight</th>
              <th>height</th>
              <th>gender</th>
            </tr>
          </thead>
          <tbody>
            {patientInformation.map((patient, index) => {
              const {
                _id,
                address,
                dateOfBirth,
                email,
                firstName,
                gender,
                height,
                lastName,
                nationality,
                phone,
                userName,
                weight,
              } = patient;

              return (
                <tr>
                  <td>{_id}</td>
                  <td>{userName}</td>
                  <td>{firstName}</td>
                  <td>{lastName}</td>
                  <td>{dateOfBirth}</td>
                  <td>{phone}</td>
                  <td>{email}</td>
                  <td>{address}</td>
                  <td>{nationality}</td>
                  <td>{weight}</td>
                  <td>{height}</td>
                  <td>{gender}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : null}

      <PatientModal />
    </PatientProvider>
  );
};

export default List;
