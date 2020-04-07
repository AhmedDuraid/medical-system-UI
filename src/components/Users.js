import React, { useState, useEffect } from "react";
import axios from "axios";

import { Card, Table } from "react-bootstrap";

const Users = () => {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    getHTTPInfo();
  }, []);

  const getHTTPInfo = () => {
    axios.get("http://localhost:1000/api/user").then((data) => {
      setUsersData(() => data.data);
    });
  };
  let maleTotalNumber = 0;
  let femaleTotalNumber = 0;
  if (usersData.length > 0) {
    usersData.map((user) => {
      if (user.gender === "M") {
        return (maleTotalNumber += 1);
      } else {
        return (femaleTotalNumber += 1);
      }
    });
  }

  return (
    <Card style={{ marginTop: 20 }} className="text-center">
      <Card.Header>Users</Card.Header>
      <Card.Body>
        <Card.Title>Users state</Card.Title>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No. users</th>
              <th>gender M</th>
              <th>gender F</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>{usersData.length}</th>
              <th>{femaleTotalNumber}</th>
              <th>{maleTotalNumber}</th>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
      <Card.Footer className="text-muted">
        Last update {Date.now().toString()}
      </Card.Footer>
    </Card>
  );
};

export default Users;
