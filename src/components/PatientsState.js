import React, { useEffect, useState, useContext } from "react";

import { PatientContext } from "../context/PatientContext";
import { getData } from "../http_calls/httpCall";
import { MainStyleContext } from "../context/mainStyleContext";

import { CardPanel, Button, Icon, ProgressBar } from "react-materialize";

const Patients = () => {
  const [patients, setPatients] = useContext(PatientContext);
  const mainStyle = useContext(MainStyleContext);

  const [update, setUpadte] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  let maleNumber = 0;
  let femaleNumber = 0;
  let AVGWeight = 0;
  let AVGHeight = 0;

  useEffect(() => {
    fetchData();
  }, [update]);

  const fetchData = async () => {
    try {
      setIsLoading(true);

      const patientsData = await getData("patient");
      await setPatients(patientsData.data.data);

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  patients.forEach((patient) => {
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

  AVGHeight = AVGHeight / patients.length;
  AVGWeight = AVGWeight / patients.length;

  const cardPanel = [
    { text: "patients Number", value: patients.length },
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
                className={`${mainStyle.colors.primary} ${mainStyle.alighn.center}`}
              >
                <span className={mainStyle.colors.mainText}>
                  {data.text} : {data.value}
                </span>
              </CardPanel>
            );
          })}
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

export default Patients;
