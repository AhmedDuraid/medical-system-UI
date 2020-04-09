import React from "react";

// importing Bootstarp CSS
// import "bootstrap/dist/css/bootstrap.min.css";
import "materialize-css/dist/css/materialize.css";
import "materialize-css/dist/js/materialize";

// pages
import Home from "./pages/Home";
import Header from "./components/Header";

import { Container } from "react-materialize";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Home />
      </Container>
    </>
  );
}

export default App;
