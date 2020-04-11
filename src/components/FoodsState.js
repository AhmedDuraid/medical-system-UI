import React from "react";
import { HttpHookGet } from "../hooks/HttpHook";

import { CardPanel, Button, Icon, ProgressBar } from "react-materialize";
import { mainSyle } from "../style/mainStyle";

const Foods = () => {
  const { axiosState, updateState, loadingState } = HttpHookGet("food");

  // state
  const [food] = axiosState;
  const [isLoading] = loadingState;
  const [update, setUpadte] = updateState;

  let foodData = food.data;
  const style = mainSyle();

  const cardPanel = [
    {
      text: "No. Food Re",
      value: foodData ? foodData.length : 0,
    },
  ];

  return (
    <React.Fragment>
      {isLoading ? (
        <ProgressBar />
      ) : (
        <React.Fragment>
          {cardPanel.map((element, index) => (
            <CardPanel
              key={index}
              className={`${style.colors.primary} ${style.alighn.center}`}
            >
              <span className={style.colors.mainText}>
                {element.text} : {element.value}
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
export default Foods;
