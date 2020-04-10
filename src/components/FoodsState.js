import React, { useState, useEffect, useContext } from "react";

import { FoodsContext } from "../context/FoodsContext";
import { MainStyleContext } from "../context/mainStyleContext";
import { getData } from "../http_calls/httpCall";

import { CardPanel, Button, Icon, ProgressBar } from "react-materialize";

const Foods = () => {
  const [foodData, setFoodData] = useContext(FoodsContext);
  const mainStyle = useContext(MainStyleContext);

  const [isLoading, setIsLoading] = useState(true);
  const [update, setUpadte] = useState(false);

  useEffect(() => {
    fetchData();
  }, [update]);

  const fetchData = async () => {
    try {
      setIsLoading(true);

      const foodData = await getData("food");
      await setFoodData(foodData.data.data);

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const cardPanel = [
    {
      text: "No. Food Re",
      value: foodData.length,
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
export default Foods;
