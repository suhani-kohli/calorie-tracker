import React from "react";
import DailyTotal from "../DailyTotal/DailyTotal";
import MealInfo from "../MealInnfo";
import "./Styles.css";

const FoodDiaryTable = ({ date, meals }) => {

  return (
    <>
      <tbody className="food-diary-table">
        {meals.map(meal => (
          <MealInfo date={date} mealName={meal} key={meal} />
        ))}
        <DailyTotal
          date={date}
          mealName={meals}
          key={meals}
        />
      </tbody>
    </>
  );
};

// TODO: ADD FOOD + BUTTOM "TOTAL"-BAR.

export default FoodDiaryTable;
