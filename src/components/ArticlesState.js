import React, { useState, useEffect, useContext } from "react";

import { ArticlesContext } from "../context/ArticlesContext";
import { MainStyleContext } from "../context/mainStyleContext";
import { getData } from "../http_calls/httpCall";

import { CardPanel, Button, Icon, ProgressBar } from "react-materialize";

const Articles = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [articleData, setArticleData] = useContext(ArticlesContext);
  const [update, setUpadte] = useState(false);

  const mainStyle = useContext(MainStyleContext);

  useEffect(() => {
    fetchData();
  }, [update]);

  const fetchData = async () => {
    try {
      setIsLoading(true);

      const articles = await getData("article");
      await setArticleData(articles.data.data);

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const cardPanel = [
    {
      text: "Articles Number",
      value: articleData.length,
    },
  ];

  return (
    <React.Fragment>
      {isLoading ? (
        <ProgressBar />
      ) : (
        <React.Fragment>
          {cardPanel.map((element, index) => {
            return (
              <CardPanel
                key={index}
                className={`${mainStyle.colors.primary} ${mainStyle.alighn.center}`}
              >
                <span className={mainStyle.colors.mainText}>
                  {element.text} : {element.value}
                </span>
              </CardPanel>
            );
          })}

          <Button
            className={`${mainStyle.colors.btn} ${mainStyle.alighn.folatRight}`}
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
};
export default Articles;
