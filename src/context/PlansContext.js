import React, { useState, createContext } from "react";

// context to be used
export const PlansContext = createContext();

// provider
export const PlansProvider = (props) => {
  const [plansData, setPlansData] = useState([]);

  return (
    <PlansContext.Provider value={[plansData, setPlansData]}>
      {props.children}
    </PlansContext.Provider>
  );
};
