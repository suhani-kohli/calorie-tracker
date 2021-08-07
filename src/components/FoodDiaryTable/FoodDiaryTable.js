import React, { useEffect, useState } from "react";
import DailyTotal from "../DailyTotal/DailyTotal";
import MealInfo from "../MealInnfo";
import "./Styles.css";

const FoodDiaryTable = ({ date, meals }) => {
  const [diary, setDiary] = useState([])

  useEffect(() => {
    const url = `http://localhost:8080/foodlogs?date=${date}`
    fetch(url)
    .then(response => response.json())
    .then(data => setDiary(data));
  }, [])

  return (
    <>
      <tbody className="food-diary-table">
        {meals.map(meal => (
          <MealInfo date={date} mealName={meal} key={meal} diary={diary} />
        ))}
        <DailyTotal
          date={date}
          mealName={meals}
          key={meals}
          diary={diary}
        />
      </tbody>
    </>
  );
};

// TODO: ADD FOOD + BUTTOM "TOTAL"-BAR.

export default FoodDiaryTable;
