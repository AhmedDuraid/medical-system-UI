import React from "react";

import Header from "../components/Header";

import Users from "../components/Users";
import Patients from "../components/Patients";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <Container>
        <Row className="justify-content-md-center">
          <Col>
            <Patients />
          </Col>
        </Row>
        <Row>
          <Col>
            <Users />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Home;
