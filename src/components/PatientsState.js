import React from "react";

import { HttpHookGet } from "../hooks/HttpHook";
import ReloadStatusButton from "./ReloadStatusButton";

import { CardPanel, ProgressBar } from "react-materialize";
import { mainSyle } from "../style/mainStyle";

const Patients = (props) => {
  const { axiosState, updateState, loadingState } = HttpHookGet("patient");

  // state
  const [patients] = axiosState;
  const [update, setUpadte] = updateState;
  const [isLoading] = loadingState;

  let patientsData = patients.data;
  const style = mainSyle();

  let maleNumber = 0;
  let femaleNumber = 0;
  let AVGWeight = 0;
  let AVGHeight = 0;

  if (patientsData) {
    patientsData.forEach((patient) => {
      if (patient.gender === "M") {
        maleNumber += 1;
      } else {
        femaleNumber += 1;
      }

      if (patient.weight) {
        AVGWeight += patient.weight;
      }
      if (patient.height) {
        AVGHeight += patient.height;
      }
    });

    AVGHeight = AVGHeight / patients.data.length;
    AVGWeight = AVGWeight / patients.data.length;
  }

  const cardPanel = [
    {
      text: "patients Number",
      value: patientsData ? patientsData.length : 0,
    },
    { text: "Gender: Male Number", value: maleNumber },
    { text: "Gender: Female Number", value: femaleNumber },
    { text: "AVG Weight", value: AVGWeight },
    { text: "AVG Height", value: AVGHeight },
  ];

  return (
    <React.Fragment>
      {isLoading ? (
        <ProgressBar />
      ) : (
        <React.Fragment>
          {cardPanel.map((data, index) => {
            return (
              <CardPanel
                key={index}
                className={`${style.colors.primary} ${style.alighn.center}`}
              >
                <span className={style.colors.mainText}>
                  {data.text} : {data.value}
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

export default Patients;
