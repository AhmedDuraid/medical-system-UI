import React, { useState, useEffect } from "react";
import axios from "axios";

import { ProgressBar, Button, Icon, CardPanel } from "react-materialize";

function Feedback() {
  const [isLoading, setIsLoading] = useState(true);
  const [feedbackData, setFeedbackData] = useState([]);
  const [update, setUpadte] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://localhost:1000/api/feedback")
      .then((data) => {
        setFeedbackData(data.data.data);

        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  }, [update]);

  return (
    <React.Fragment>
      {isLoading ? (
        <ProgressBar />
      ) : (
        <React.Fragment>
          <CardPanel className="teal  pink darken-4">
            <span className="white-text">
              No. Feedback : {feedbackData.length}
            </span>
          </CardPanel>
          <Button
            className="red pulse"
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
}

export default Feedback;