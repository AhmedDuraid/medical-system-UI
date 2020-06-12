import React from "react";
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

const PatientProgram = ({ patientId }) => {
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
              <span>patient Name : </span>
            </CardPanel>

            <CardPanel>
              <span>Age : </span>
            </CardPanel>

            <CardPanel>
              <span>Hight: </span>
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
        <Col>plan</Col>
      </Row>
      <Row>
        <Col>
          <span> Doctor note</span>
          <Card>note one </Card>
          <Card>note two </Card>
          <Card>note three </Card>
        </Col>
      </Row>

      <Row>
        <Col>Lab re</Col>
      </Row>
    </Container>
  );
};

export default PatientProgram;
