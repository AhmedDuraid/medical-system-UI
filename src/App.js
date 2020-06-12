import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// importing materialize CSS
import "materialize-css/dist/css/materialize.css";
import "materialize-css/dist/js/materialize";

// pages
import Home from "./pages/Home";
import Header from "./components/Header";
import List from "./pages/PatientList";
import FoodAPI from "./pages/FoodAPI";
import PatientProgram from "./pages/PatientProgram";
import PatientWightEnter from "./pages/PatientWightEnter";
import Lab from "./pages/Lab";
import DoctorNote from "./pages/DoctorNote";
import Feedback from "./pages/Feedback";
import FeedbackView from "./pages/FeedbackView";
import CreatePatientProfile from "./pages/CreatePatientProfile";

const App = () => {
  return (
    <>
      <Header />

      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/list" component={List} />
        <Route path="/foodapi" component={FoodAPI} />
        <Route path="/patient-program" component={PatientProgram} />
        <Route path="/wightenter" component={PatientWightEnter} />
        <Route path="/lab" component={Lab} />
        <Route path="/doctornote" component={DoctorNote} />
        <Route path="/feedbackenter" component={Feedback} />
        feedback_view
        <Route path="/feedback_view" component={FeedbackView} />
        <Route
          path="/create_pateint_profile"
          component={CreatePatientProfile}
        />
        <Redirect from="/" to="/home" />
      </Switch>
    </>
  );
};

export default App;
