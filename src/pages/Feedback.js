import React, { useState } from "react";
import axios from "axios";

import { TextInput, Container, Button, Badge } from "react-materialize";

const Feedback = () => {
  const [feedback, setFeedback] = useState({
    titel: null,
    name: null,
    email: null,
    phone: null,
    feedbackBody: null,
  });

  const [disable, setDisable] = useState(false);
  const [error, setError] = useState(false);

  const formHandler = () => {
    if (
      feedback.email == null ||
      feedback.feedbackBody == null ||
      feedback.name == null ||
      feedback.phone == null ||
      feedback.titel == null
    ) {
      setError(true);
    } else {
      axios.post("http://localhost:1000/api/feedback", feedback).catch((e) => {
        console.error(e);
      });
      setDisable(true);
    }

    console.log("feedback object", feedback);
  };
  return (
    <Container>
      {/* Sting */}
      <TextInput
        label="Name"
        data-length={20}
        icon="sentiment_satisfied_alt"
        onChange={(e) => setFeedback({ ...feedback, name: e.target.value })}
        disabled={disable}
      />
      {/* emai / String */}
      <TextInput
        email
        label="Email"
        icon="email"
        validate
        error="Wrong email"
        onChange={(e) => setFeedback({ ...feedback, email: e.target.value })}
        disabled={disable}
      />
      {/* titiel /String */}
      <TextInput
        label="Problem"
        icon="report_problem"
        onChange={(e) => setFeedback({ ...feedback, titel: e.target.value })}
        disabled={disable}
      />
      {/* Number */}
      <TextInput
        label="phone Number"
        icon="contacts"
        onChange={(e) => setFeedback({ ...feedback, phone: e.target.value })}
        disabled={disable}
      />

      <TextInput
        label="What is the problem"
        onChange={(e) =>
          setFeedback({ ...feedback, feedbackBody: e.target.value })
        }
        disabled={disable}
      />

      <Button disabled={disable} onClick={formHandler}>
        send a feedback
      </Button>
      {disable ? (
        <Badge>
          Thank you for your feedback, we will review your feedback ang get back
          to you
        </Badge>
      ) : null}
      {error ? <Badge>please fill all fields</Badge> : null}
    </Container>
  );
};

export default Feedback;
