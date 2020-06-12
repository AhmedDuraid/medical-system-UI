import React from "react";
import {
  Collapsible,
  CollapsibleItem,
  Icon,
  Button,
  ProgressBar,
} from "react-materialize";
import axios from "axios";

const FeedbackView = () => {
  const [feedbackData, setFeedbackData] = React.useState([]);
  const [update, setUpdate] = React.useState(true);

  // get the data from the URL
  React.useEffect(() => {
    setFeedbackData([]);
    getFeedbackData();
  }, [update]);

  const getFeedbackData = () => {
    axios
      .get("http://localhost:1000/api/feedback")
      .then((axiosFeedbackData) => {
        let axiosData = axiosFeedbackData.data.data;
        let onlyNewFeedback = [];

        // only output the new feedback
        axiosData.map((data) => {
          if (data.read === false) {
            return onlyNewFeedback.push(data);
          } else {
            return null;
          }
        });
        console.log("all data", onlyNewFeedback);

        setFeedbackData(onlyNewFeedback);
      });
  };

  const updateToBeReaded = (feedbackId) => {
    setUpdate(!update);
    axios.put(`http://localhost:1000/api/feedback/${feedbackId}`);

    console.log(feedbackId);
  };

  return feedbackData.length === 0 ? (
    <ProgressBar />
  ) : (
    <Collapsible accordion>
      {feedbackData.map((data, index) => {
        return (
          <CollapsibleItem
            icon={<Icon>fiber_new</Icon>}
            key={data._id}
            expanded={false}
            header={`${data.titel},  (${data.createDate})`}
            node="div"
          >
            <h6>ID : {data._id}</h6>
            <h6>Date : {data.createDate}</h6>
            <h6>email : {data.email}</h6>
            <h6>Feedback : {data.feedbackBody}</h6>
            <h6>name : {data.name}</h6>
            <h6>Titel : {data.titel}</h6>
            <Button onClick={() => updateToBeReaded(data._id)}>
              Clear feedback
            </Button>
          </CollapsibleItem>
        );
      })}
    </Collapsible>
  );
};

export default FeedbackView;
