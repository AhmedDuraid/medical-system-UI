import React, { useState, useEffect } from "react";
import axios from "axios";

import { CardPanel, Button, Icon, ProgressBar } from "react-materialize";

export default function Plans() {
  const [isLoading, setIsLoading] = useState(true);
  const [plansData, setPlansData] = useState([]);
  const [update, setUpadte] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://localhost:1000/api/plans")
      .then((data) => {
        setPlansData(data.data.data);

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
            <span className="white-text">No. Plans : {plansData.length}</span>
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