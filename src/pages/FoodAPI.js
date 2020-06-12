import React, { useState } from "react";
import { Row, Col, TextInput, ProgressBar } from "react-materialize";
import Recipe from "../components/Recipe";

import axios from "axios";

const FoodAPI = () => {
  // use state
  const [foodInfo, setfoodInfo] = useState({
    input: "",
    loading: false,
    data: null,
  });

  // take the input
  const searchInputHandlear = function (event) {
    setfoodInfo({ ...foodInfo, input: event.target.value });
  };

  // HTTP call
  const formHandlear = async function (event) {
    const APP_ID = process.env.REACT_APP_APP_ID;
    const APP_KEY = process.env.REACT_APP_APP_KEY;
    const query = foodInfo.input;

    // stop the form from reload
    event.preventDefault();

    // setup the reload
    setfoodInfo({ ...foodInfo, loading: true });

    axios
      .get(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      )
      .then((res) => {
        setfoodInfo({
          ...foodInfo,
          data: res.data.hits,
          loading: false,
        });
      })
      .catch((error) => {
        console.error(error);

        // stop the loading if there is error
        setfoodInfo({ ...foodInfo, loading: false, pageError: true });
      });
  };

  return (
    <React.Fragment>
      <Row>
        <Col s={12}>
          <form onSubmit={formHandlear}>
            <TextInput
              label="search for food "
              onChange={searchInputHandlear}
              value={foodInfo.input}
              id="search"
              type="text"
              className="validate"
              disabled={foodInfo.loading}
            />
          </form>
        </Col>
      </Row>
      <Row>
        {
          // set the loading
          foodInfo.loading ? <ProgressBar /> : null
        }
        {
          // if we get the data
          foodInfo.data ? <Recipe recipes={foodInfo.data} /> : null
        }
      </Row>
    </React.Fragment>
  );
};
export default FoodAPI;
