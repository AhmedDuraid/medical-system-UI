import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import { MedicineContext } from "../../context/MedicineContext";

import { CardPanel, Button, Icon, ProgressBar } from "react-materialize";

export default function Medicine() {
  const [medicineData, setMedicineData] = useContext(MedicineContext);

  const [isLoading, setIsLoading] = useState(true);
  const [update, setUpadte] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://localhost:1000/api/food")
      .then((data) => {
        setMedicineData(data.data.data);
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
            <span className="white-text">
              No. Medicines : {medicineData.length}
            </span>
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
