import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// importing materialize CSS
import "materialize-css/dist/css/materialize.css";
import "materialize-css/dist/js/materialize";

// pages
import Home from "./pages/Home";
import Header from "./components/Header";
import List from "./pages/List";

import { Container } from "react-materialize";

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/list" component={List} />
          <Redirect from="/" to="/home" />
        </Switch>
      </Container>
    </>
  );
};

export default App;
