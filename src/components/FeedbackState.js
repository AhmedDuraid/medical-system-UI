import React, { useState, useEffect, useContext } from "react";

import { FeedbackContext } from "../context/FeedbackContext";
import { MainStyleContext } from "../context/mainStyleContext";
import { getData } from "../http_calls/httpCall";

import { ProgressBar, Button, Icon, CardPanel } from "react-materialize";

const Feedback = () => {
  const [feedbackData, setFeedbackData] = useContext(FeedbackContext);
  const mainStyle = useContext(MainStyleContext);

  const [isLoading, setIsLoading] = useState(true);
  const [update, setUpadte] = useState(false);

  useEffect(() => {
    fetchData();
  }, [update]);

  const fetchData = async () => {
    try {
      setIsLoading(true);

      const feedbacks = await getData("feedback");
      await setFeedbackData(feedbacks.data.data);

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const cardPanel = [
    {
      text: "Feedback Number",
      value: feedbackData.length,
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
                {element.text}: {element.value}
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

export default Feedback;
