import React, { useState, useEffect, useContext } from "react";

import { UserContext } from "../context/UsersContext";
import { MainStyleContext } from "../context/mainStyleContext";
import { getData } from "../http_calls/httpCall";

import { CardPanel, Button, Icon, ProgressBar } from "react-materialize";

const Users = () => {
  const [usersData, setUsersData] = useContext(UserContext);
  const mainStyle = useContext(MainStyleContext);

  const [update, setUpadte] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  let TotalNumberOfMale = 0;
  let TotalNumberOfFemale = 0;

  useEffect(() => {
    fetchData();
  }, [update]);

  const fetchData = async () => {
    setIsLoading(true);

    const data = await getData("user");
    console.log("from user", data);
    await setUsersData(data.data);

    setIsLoading(false);
  };

  if (usersData.length > 0) {
    usersData.forEach((user) => {
      if (user.gender === "M") {
        return (TotalNumberOfMale += 1);
      } else {
        return (TotalNumberOfFemale += 1);
      }
    });
  }

  const cardPanel = [
    { text: "No. users", value: +usersData.length },
    { text: "gender M", value: +TotalNumberOfMale },
    { text: "gender F", value: +TotalNumberOfFemale },
  ];
  return (
    <React.Fragment>
      {isLoading ? (
        <ProgressBar />
      ) : (
        <React.Fragment>
          {cardPanel.map((card, index) => (
            <CardPanel
              key={index}
              className={`${mainStyle.colors.primary} ${mainStyle.alighn.center}`}
            >
              <span className={mainStyle.colors.mainText}>
                {card.text} : {card.value}
              </span>
            </CardPanel>
          ))}
          <Button
            className={`${mainStyle.colors.btn} ${mainStyle.alighn.folatRight}`}
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
