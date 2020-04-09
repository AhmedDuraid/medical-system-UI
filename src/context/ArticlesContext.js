import React, { createContext, useState } from "react";

// context to be use
export const ArticlesContext = createContext();

// provider
export const ArticlesProvider = (props) => {
  const [articleData, setArticleData] = useState([]);

  return (
    <ArticlesContext.Provider value={[articleData, setArticleData]}>
      {props.children}
    </ArticlesContext.Provider>
  );
};
