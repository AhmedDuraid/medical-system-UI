import React, { useState, useEffect, useContext } from "react";

import { PlansContext } from "../context/PlansContext";
import { MainStyleContext } from "../context/mainStyleContext";
import { getData } from "../http_calls/httpCall";

import { CardPanel, Button, Icon, ProgressBar } from "react-materialize";

const Plans = () => {
  const [plansData, setPlansData] = useContext(PlansContext);
  const mainStyle = useContext(MainStyleContext);

  const [isLoading, setIsLoading] = useState(true);
  const [update, setUpadte] = useState(false);

  useEffect(() => {
    fetchData();
  }, [update]);

  const fetchData = async () => {
    try {
      setIsLoading(true);

      const plansData = await getData("plans");
      await setPlansData(plansData.data.data);

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const cardPanel = [
    {
      text: "Plans Number",
      value: plansData.length,
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
              className={`${mainStyle.colors.primary} ${mainStyle.alighn.center}`}
            >
              <span className={mainStyle.colors.mainText}>
                {element.text} : {element.value}
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

export default Plans;
