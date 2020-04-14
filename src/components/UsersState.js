import React from "react";
import { HttpHookGet } from "../hooks/HttpHook";

import { CardPanel, Button, Icon, ProgressBar } from "react-materialize";
import { mainSyle } from "../style/mainStyle";

const Users = () => {
  const { axiosState, updateState, loadingState } = HttpHookGet("user");

  // state
  const [usersData] = axiosState;
  const [update, setUpadte] = updateState;
  const [isLoading] = loadingState;

  const style = mainSyle();

  let TotalNumberOfMale = 0;
  let TotalNumberOfFemale = 0;

  if (usersData.length > 0) {
    TotalNumberOfMale = usersData.filter((user) => user.gender === "M").length;
    TotalNumberOfFemale = usersData.filter((user) => user.gender === "F")
      .length;
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
              className={`${style.colors.primary} ${style.alighn.center}`}
            >
              <span className={style.colors.mainText}>
                {card.text} : {card.value}
              </span>
            </CardPanel>
          ))}
          <Button
            className={`${style.colors.btn} ${style.alighn.folatRight}`}
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
