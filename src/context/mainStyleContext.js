import React, { createContext } from "react";

// context
export const MainStyleContext = createContext();

// provider

export const MainStyleProvider = (props) => {
  let mainStyle = {
    colors: {
      primary: "blue",
      secondary: "blue lighten-2",
      mainText: "white-text",
      btn: "red",
    },
    alighn: {
      center: "center-align", // for text
      left: "left-align", // for text
      floatLeft: "left", // for elements
      folatRight: "right", //for elements
    },
  };
  return (
    <MainStyleContext.Provider value={mainStyle}>
      {props.children}
    </MainStyleContext.Provider>
  );
};
