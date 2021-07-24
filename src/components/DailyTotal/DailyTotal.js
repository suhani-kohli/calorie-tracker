import React from "react";
import "./Styles.css";

// Basically just a copy of FoodDiaryRenderMeal component with a small change.
const DailyTotal = ({ date, mealName }) => {
  const diary = [
    {
      id: 1,
      mealName: "Breakfast",
      foodItem: "Eggs",
      amount: 4,
      protein: 22.25,
      carbs: 1.25,
      fat: 16.88,
      calories: 246,
      size: "",
    },
    {
      id: 2,
      mealName: "Lunch",
      foodItem: "pizza",
      amount: 1,
      protein: 20.75,
      carbs: 58,
      fat: 24.55,
      calories: 536,
      size: "200g",
    },
  ];
  const goals = { kcal: 2000, protein: 175, carbs: 225, fat: 44 };

  let totalKcal = 0,
    totalProtein = 0,
    totalCarbs = 0,
    totalFat = 0;

  const setAllMealTotals = food => {

    const { calories, protein, fat, carbs } = food;
    totalKcal += calories;
    totalProtein += protein;
    totalCarbs += carbs;
    totalFat += fat;
  };
  const calculateRemaining = (kcal, totalKcal) => {
    return (kcal - totalKcal).toFixed(0);
  };
  const isPostive = (kcal, totalKcal) => {
    return kcal > totalKcal ? true : false;
  };

  return (
    <>
      {diary.map(food => (
        setAllMealTotals(food)
      ))}

      <tr className="bottom-bar-daily-total">
        <td className="bottom-bar-daily-total text">totals</td>
        <td className="daily-totals">{totalKcal.toFixed(0)}</td>
        <td className="daily-totals">{totalProtein.toFixed(0)}</td>
        <td className="daily-totals">{totalCarbs.toFixed(0)}</td>
        <td className="daily-totals">{totalFat.toFixed(0)}</td>
        <td></td>
      </tr>
      <tr className="bottom-bar-daily-total">
        <td className="bottom-bar-daily-total goal">your daily goal</td>
        <td className="daily-totals">{goals.kcal}</td>
        <td className="daily-totals">{goals.protein}</td>
        <td className="daily-totals">{goals.carbs}</td>
        <td className="daily-totals">{goals.fat}</td>
        <td></td>
      </tr>
      <tr className="bottom-bar-daily-total">
        <td className="bottom-bar-daily-total remaining">remaining</td>
        <td
          className={`daily-totals ${isPostive(goals.kcal, totalKcal) ? "green" : "red"
            }`}
        >
          {calculateRemaining(goals.kcal, totalKcal)}
        </td>
        <td
          className={`daily-totals ${isPostive(goals.protein, totalProtein) ? "green" : "red"
            }`}
        >
          {calculateRemaining(goals.protein, totalProtein)}
        </td>
        <td
          className={`daily-totals ${isPostive(goals.carbs, totalCarbs) ? "green" : "red"
            }`}
        >
          {calculateRemaining(goals.carbs, totalCarbs)}
        </td>
        <td
          className={`daily-totals ${isPostive(goals.far, totalFat) ? "green" : "red"
            }`}
        >
          {calculateRemaining(goals.fat, totalFat)}
        </td>
        <td></td>
      </tr>
    </>
  );
};

export default DailyTotal;
