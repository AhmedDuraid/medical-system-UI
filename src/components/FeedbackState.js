import React from "react";
import { HttpHookGet } from "../hooks/HttpHook";

import { ProgressBar, Button, Icon, CardPanel } from "react-materialize";
import { mainSyle } from "../style/mainStyle";

const Feedback = () => {
  const { axiosState, updateState, loadingState } = HttpHookGet("feedback");

  // state
  const [feedback] = axiosState;
  const [isLoading] = loadingState;
  const [update, setUpadte] = updateState;

  let feedbackData = feedback.data;
  const style = mainSyle();

  const cardPanel = [
    {
      text: "Feedback Number",
      value: feedbackData ? feedbackData.length : 0,
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
                {element.text}: {element.value}
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

export default Feedback;
