import React from "react";

import { HttpHookGet } from "../hooks/HttpHook";
import ReloadStatusButton from "./ReloadStatusButton";

import { CardPanel, ProgressBar } from "react-materialize";
import { mainSyle } from "../style/mainStyle";

const Medicine = () => {
  const { axiosState, updateState, loadingState } = HttpHookGet("medicine");

  // state
  const [isLoading] = loadingState;
  const [update, setUpadte] = updateState;
  const [medicine] = axiosState;

  let medicineData = medicine.data;
  const style = mainSyle();

  const cardPanel = [
    {
      text: "Medicines Number",
      value: medicineData ? medicineData.length : 0,
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

          <ReloadStatusButton changeUpdate={setUpadte} update={update} />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};
export default Medicine;
