import React, { useState, createContext } from "react";

// context to be used
export const MedicineContext = createContext();

// provider
export const MedicineProvider = (props) => {
  const [medicineData, setMedicineData] = useState([]);

  return (
    <MedicineContext.Provider value={[medicineData, setMedicineData]}>
      {props.children}
    </MedicineContext.Provider>
  );
};
