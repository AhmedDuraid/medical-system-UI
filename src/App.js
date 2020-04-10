import React from "react";

// importing Bootstarp CSS
// import "bootstrap/dist/css/bootstrap.min.css";
import "materialize-css/dist/css/materialize.css";
import "materialize-css/dist/js/materialize";

// pages
import Home from "./pages/Home";
import Header from "./components/Header";
import { MainStyleProvider } from "./context/mainStyleContext";

import { Container } from "react-materialize";

function App() {
  return (
    <MainStyleProvider>
      <Header />
      <Container>
        <Home />
      </Container>
    </MainStyleProvider>
  );
}

export default App;
