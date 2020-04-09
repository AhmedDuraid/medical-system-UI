import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import { UserContext } from "../../context/UsersContext";

import { CardPanel, Button, Icon, ProgressBar } from "react-materialize";

const Users = () => {
  const [usersData, setUsersData] = useContext(UserContext);

  const [update, setUpadte] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  let maleTotalNumber = 0;
  let femaleTotalNumber = 0;

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://localhost:1000/api/user")
      .then((data) => {
        setUsersData(() => data.data);

        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  }, [update]);

  // this can be better "check"
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
    <React.Fragment>
      {isLoading ? (
        <ProgressBar />
      ) : (
        <React.Fragment>
          <CardPanel className="teal  pink darken-4">
            <span className="white-text">No. users : {usersData.length} </span>
          </CardPanel>
          <CardPanel className="teal  pink darken-4">
            <span className="white-text">gender M : {maleTotalNumber} </span>
          </CardPanel>
          <CardPanel className="teal  pink darken-4">
            <span className="white-text">gender F : {femaleTotalNumber} </span>
          </CardPanel>
          <Button
            className="red pulse"
            floating
            icon={<Icon>update</Icon>}
            large
            node="button"
            waves="light"
            onClick={() => setUpadte(!update)}
          />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Users;
