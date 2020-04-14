import React, { useContext } from "react";
import { HttpHookGet } from "../../hooks/HttpHook";
import { PatientContext } from "../../context/PatientContext";

import { Table, ProgressBar } from "react-materialize";
import { mainSyle } from "../../style/mainStyle";

const PatinetList = () => {
  // get patient information from Http
  const { axiosState, updateState, loadingState } = HttpHookGet("patient");

  const [, setPatient] = useContext(PatientContext);

  //destructuring
  const [patientLoad] = loadingState;
  let [patientData] = axiosState;

  patientData = patientData.data;

  //style
  const { table } = mainSyle();

  return (
    <React.Fragment>
      {patientLoad ? (
        <ProgressBar />
      ) : (
        <React.Fragment>
          <Table className={table}>
            <thead>
              <tr>
                <th>Paitent ID</th>
                <th>User Name</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Date Of Birth</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Address</th>
                <th>nationality</th>
                <th>Weight</th>
                <th>Height</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody>
              {patientData.map((patient) => {
                return (
                  <tr
                    key={patient._id}
                    onClick={() =>
                      // send information to context
                      // modal will open
                      setPatient({
                        patientInfo: patient,
                        openModal: true,
                        update: updateState,
                      })
                    }
                  >
                    <td>{patient._id}</td>
                    <td>{patient.userName}</td>
                    <td>{patient.firstName}</td>
                    <td>{patient.lastName}</td>
                    <td>{patient.dateOfBirth}</td>
                    <td>{patient.phone}</td>
                    <td>{patient.email}</td>
                    <td>{patient.address}</td>
                    <td>{patient.nationality}</td>
                    <td>{patient.weight}</td>
                    <td>{patient.height}</td>
                    <td>{patient.gender}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default PatinetList;
