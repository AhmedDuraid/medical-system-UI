import React, { useEffect, useState } from "react";

import { Card, Table } from "react-bootstrap";
import axios from "axios";

export default function Patients() {
  const [patients, setPatients] = useState([]);
  let maleNumber = 0;
  let femaleNumber = 0;
  let AVGWeight = 0;
  let AVGHeight = 0;

  useEffect(() => {
    getpatientHTTP();
  }, []);

  const getpatientHTTP = () => {
    axios.get("http://localhost:1000/api/patient").then((patientData) => {
      setPatients(patientData.data.data);
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
    console.log(patients);
  }

  return (
    <Card style={{ marginTop: 20 }} className="text-center">
      <Card.Header>Patients</Card.Header>
      <Card.Body>
        <Card.Title>Patients state</Card.Title>

        <Table striped bordered size="sm" responsive>
          <thead>
            <tr>
              <th>No. patients</th>
              <th>gender M</th>
              <th>gender F</th>
              <th>AVG Weight</th>
              <th>AVG Height</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>{patients.length}</th>
              <th>{maleNumber}</th>
              <th>{femaleNumber}</th>
              <th>{AVGWeight}</th>
              <th>{AVGHeight}</th>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
      <Card.Footer className="text-muted">
        Last update {Date.now().toString()}
      </Card.Footer>
    </Card>
  );
}
