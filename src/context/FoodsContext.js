import React, { useState, createContext } from "react";

// context to be used
export const FoodsContext = createContext();

// provider
export const FoodsProvider = (props) => {
  const [foodData, setFoodData] = useState([]);

  return (
    <FoodsContext.Provider value={[foodData, setFoodData]}>
      {props.children}
    </FoodsContext.Provider>
  );
};
