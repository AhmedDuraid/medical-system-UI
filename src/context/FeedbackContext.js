import React, { useState, createContext } from "react";

// context used
export const FeedbackContext = createContext();

// provider
export const FeedbackProvider = (props) => {
  const [feedbackData, setFeedbackData] = useState([]);

  return (
    <FeedbackContext.Provider value={[feedbackData, setFeedbackData]}>
      {props.children}
    </FeedbackContext.Provider>
  );
};
