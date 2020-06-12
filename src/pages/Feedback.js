import React from "react";
import axios from "axios";

import { TextInput, Container, Textarea, Button, Row } from "react-materialize";

const Feedback = () => {
  const [feedback, setFeedback] = React.useState({
    titel: null,
    name: null,
    email: null,
    phone: null,
    feedbackBody: null,
  });

  const formHandler = () => {
    axios.post("http://localhost:1000/api/feedback", feedback).catch((e) => {
      console.error(e);
    });

    console.log("feedback object", feedback);
  };
  return (
    <Container>
      <TextInput
        label="Name"
        data-length={20}
        icon="sentiment_satisfied_alt"
        onChange={(e) => setFeedback({ ...feedback, name: e.target.value })}
      />
      <TextInput
        email
        label="Email"
        icon="email"
        validate
        error="Wrong email"
        onChange={(e) => setFeedback({ ...feedback, email: e.target.value })}
      />
      <TextInput
        label="titel"
        icon="report_problem"
        onChange={(e) => setFeedback({ ...feedback, titel: e.target.value })}
      />
      <TextInput
        label="phone"
        icon="contacts"
        onChange={(e) => setFeedback({ ...feedback, phone: e.target.value })}
      />

      <TextInput
        label="What is the problem"
        onChange={(e) =>
          setFeedback({ ...feedback, feedbackBody: e.target.value })
        }
      />

      <Button onClick={formHandler}>send a feedback</Button>
    </Container>
  );
};

export default Feedback;
