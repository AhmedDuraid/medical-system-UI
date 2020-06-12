import React from "react";
import { Col, Card, CardTitle } from "react-materialize";

const Recipe = ({ recipes }) => {
  return recipes.map((eachRecipe, index) => {
    const {
      image,
      label,
      calories,
      ingredientLines,
      totalTime,
      totalWeight,
      url,
      totalNutrients,
    } = eachRecipe.recipe;

    return (
      <Col s={12} m={6} l={3} className="Medium hoverable" key={index}>
        <Card
          className="waves-effect waves-block waves-light"
          header={<CardTitle image={image}> {label}</CardTitle>}
        >
          <ul>
            <li> calories : {calories.toFixed(3)}</li>
            <li>
              <div className="divider #c2185b pink darken-2" />
              ingredientLines :
              <ol>
                {ingredientLines.map((ingredientLine, index) => {
                  return <li key={index}>{ingredientLine}</li>;
                })}
              </ol>
            </li>
            <li>Time needs :{totalTime}</li>
            <li>weight : {totalWeight.toFixed(3)}</li>
            <li>url : {url}</li>
            <li>
              Nutrients:
              <ol>
                {Object.values(totalNutrients).map((nutrient, index) => {
                  const { label, quantity, unit } = nutrient;
                  return (
                    <li key={index}>{`${label}, ${quantity.toFixed(
                      3
                    )} (${unit})`}</li>
                  );
                })}
              </ol>
            </li>
          </ul>
        </Card>
      </Col>
    );
  });
};

export default Recipe;
