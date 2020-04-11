import React from "react";

import { HttpHookGet } from "../hooks/HttpHook";
import ReloadStatusButton from "./ReloadStatusButton";

import { CardPanel, ProgressBar } from "react-materialize";
import { mainSyle } from "../style/mainStyle";

const Plans = () => {
  const { axiosState, updateState, loadingState } = HttpHookGet("plans");

  // state
  const [plan] = axiosState;
  const [isLoading] = loadingState;
  const [update, setUpadte] = updateState;

  let plansData = plan.data;
  const style = mainSyle();

  const cardPanel = [
    {
      text: "Plans Number",
      value: plansData ? plansData.length : 0,
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

          <ReloadStatusButton changeUpdate={setUpadte} update={update} />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Plans;
