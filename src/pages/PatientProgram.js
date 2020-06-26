import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Card,
  CardTitle,
  Container,
  CardPanel,
} from "react-materialize";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import axios from "axios";

const PatientProgram = ({ patientId }) => {
  const [patientProfileInformation, setPatientProfileInformation] = useState();
  const [
    patientpersonalInformation,
    setPatientpersonalInformation,
  ] = useState();

  useEffect(() => {
    // get patient profile
    axios
      .get("http://localhost:1000/api/patient_profile/5e7e2734273ef2d016399796")
      .then((event) => {
        setPatientProfileInformation(event.data.data);
      });

    // get patient personal information

    axios
      .get("http://localhost:1000/api/patient/5e7e2734273ef2d016399796")
      .then((event) => {
        setPatientpersonalInformation(event.data.data);
      });
  }, []);
  const chartData = [
    { name: "January", wight: 150 },
    { name: "February", wight: 145 },
    { name: "March", wight: 144 },
    { name: "April ", wight: 140 },
    { name: "May ", wight: 138 },
    { name: "June ", wight: 137 },
    { name: "July", wight: 139 },
    { name: "August", wight: 130 },
    { name: "September", wight: 130 },
    { name: "October", wight: 125 },
    { name: "November ", wight: 120 },
    { name: "December", wight: 117 },
  ];
  const chartData2 = [
    { name: "January", wight_to_follow: 150 },
    { name: "February", wight_to_follow: 141 },
    { name: "March", wight_to_follow: 137 },
    { name: "April ", wight_to_follow: 131 },
    { name: "May ", wight_to_follow: 125 },
    { name: "June ", wight_to_follow: 120 },
    { name: "July", wight_to_follow: 115 },
    { name: "August", wight_to_follow: 101 },
    { name: "September", wight_to_follow: 97 },
    { name: "October", wight_to_follow: 91 },
    { name: "November ", wight_to_follow: 88 },
    { name: "December", wight_to_follow: 85 },
  ];

  console.log("patient Profile Information", patientProfileInformation);
  console.log("patient personal Information", patientpersonalInformation);

  return (
    <Container>
      <Row>
        <Col s={12} m={6} l={12}>
          <Card
            header={
              <CardTitle image="https://materializecss.com/images/sample-1.jpg" />
            }
            horizontal
          >
            <CardPanel>
              <span>
                Name :
                {patientpersonalInformation
                  ? `${patientpersonalInformation.firstName} ${patientpersonalInformation.lastName}`
                  : null}
              </span>
            </CardPanel>

            <CardPanel>
              <span>
                Gender :
                {patientpersonalInformation
                  ? patientpersonalInformation.gender
                  : null}
              </span>
            </CardPanel>

            <CardPanel>
              <span>
                Height:
                {patientpersonalInformation
                  ? patientpersonalInformation.height
                  : null}
              </span>
            </CardPanel>
            <CardPanel>
              <span>
                starting weight:
                {patientpersonalInformation
                  ? patientpersonalInformation.weight
                  : null}
              </span>
            </CardPanel>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <LineChart
            width={1200}
            height={300}
            data={chartData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />

            <Line type="monotone" dataKey="wight" stroke="#82ca9d" />
          </LineChart>
          <LineChart
            width={1200}
            height={300}
            data={chartData2}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="wight_to_follow" stroke="#82ca9d" />
          </LineChart>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>plan</h4>
          <Card>
            Day 1:{" "}
            {patientpersonalInformation
              ? patientProfileInformation.plan.planD1
              : null}
          </Card>
          <Card>
            Day 2:{" "}
            {patientpersonalInformation
              ? patientProfileInformation.plan.planD2
              : null}
          </Card>
          <Card>
            Day 3:{" "}
            {patientpersonalInformation
              ? patientProfileInformation.plan.planD3
              : null}
          </Card>
          <Card>
            Day 4:{" "}
            {patientpersonalInformation
              ? patientProfileInformation.plan.planD4
              : null}
          </Card>
          <Card>
            Day 5:{" "}
            {patientpersonalInformation
              ? patientProfileInformation.plan.planD5
              : null}
          </Card>
          <Card>
            Day 6:{" "}
            {patientpersonalInformation
              ? patientProfileInformation.plan.planD6
              : null}
          </Card>
          <Card>
            Day 7:{" "}
            {patientpersonalInformation
              ? patientProfileInformation.plan.planD7
              : null}
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4> Doctor note</h4>
          {patientProfileInformation
            ? patientProfileInformation.doctorNote.map((note, index) => (
                <Card key={index}>
                  <span> Date : {note.date}</span>
                  <span> Note : {note.note}</span>
                </Card>
              ))
            : null}
        </Col>
      </Row>

      <Row>
        <Col>
          <h4>Lab Response</h4>
          {patientProfileInformation
            ? patientProfileInformation.labRes.map((note, index) => {
                return (
                  <Card key={index}>
                    <h6>{`Date : ${note.date}`}</h6>
                    <h6>{`Test Name: ${note.labTestName}`}</h6>
                    <h6>{`Respose:  ${note.labRes}`}</h6>
                  </Card>
                );
              })
            : null}
        </Col>
      </Row>
    </Container>
  );
};

export default PatientProgram;
