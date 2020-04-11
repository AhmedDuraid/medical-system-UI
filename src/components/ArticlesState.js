import React from "react";

import { HttpHookGet } from "../hooks/HttpHook";
import ReloadStatusButton from "./ReloadStatusButton";

import { CardPanel, ProgressBar } from "react-materialize";
import { mainSyle } from "../style/mainStyle";

const Articles = () => {
  const { axiosState, updateState, loadingState } = HttpHookGet("article");

  // state
  const [isLoading] = loadingState;
  const [article] = axiosState;
  const [update, setUpadte] = updateState;

  let articleData = article.data;
  const style = mainSyle();

  const cardPanel = [
    {
      text: "Articles Number",
      value: articleData ? articleData.length : 0,
    },
  ];

  return (
    <React.Fragment>
      {isLoading ? (
        <ProgressBar />
      ) : (
        <React.Fragment>
          {cardPanel.map((element, index) => {
            return (
              <CardPanel
                key={index}
                className={`${style.colors.primary} ${style.alighn.center}`}
              >
                <span className={style.colors.mainText}>
                  {element.text} : {element.value}
                </span>
              </CardPanel>
            );
          })}

          <ReloadStatusButton changeUpdate={setUpadte} update={update} />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};
export default Articles;
