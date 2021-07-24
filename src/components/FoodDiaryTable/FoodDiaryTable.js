import React from "react";
import MealInfo from "../MealInnfo";
import "./Styles.css";

const FoodDiaryTable = ({ date, meals }) => {

  return (
    <>
      <tbody className="food-diary-table">
        {meals.map(meal => (
          <MealInfo date={date} mealName={meal} key={meal} />
        ))}
      </tbody>
    </>
  );
};

// TODO: ADD FOOD + BUTTOM "TOTAL"-BAR.

export default FoodDiaryTable;
