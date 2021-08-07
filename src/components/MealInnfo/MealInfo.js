import React from "react";
import { Link } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";
import "./Styles.css";

const MealInfo = ({ date, mealName, diary }) => {
  
  let totalKcal = 0,
    totalProtein = 0,
    totalCarbs = 0,
    totalFat = 0;

  const setAllMealTotals = food => {
    // calculating total calories and macros for a meal
    const { calories, protein, fat, carbs } = food;
    totalKcal += calories;
    totalProtein += protein;
    totalCarbs += carbs;
    totalFat += fat;
  };


  const handleOnDeleteClick = id => {
    let confirmation = window.confirm(
      "Are you sure you want to delete this food from your diary?"
    );

    confirmation ? deleteDiaryFoodById(id) : console.log("false");
  };

  const deleteDiaryFoodById = id => {

  };

  return (
    <>
      <tr>
        <td className="meals-header">{mealName}</td>
      </tr>
      {diary.map(food => (
        <tr key={food.id}>
          {food.mealName === mealName ? (
            <>
              <td className="meal">
                {setAllMealTotals(food)}
                {`${food.foodItem}, ${food.amount}
                  ${food.size !== "" && food.size !== "0" ? " " + food.size : ""
                  }`}
              </td>
              <td className="macros">{food.calories}</td>
              <td className="macros">{food.protein.toFixed(0)}</td>
              <td className="macros">{food.carbs.toFixed(0)}</td>
              <td className="macros">{food.fat.toFixed(0)}</td>
              <td
                className="delete"
                onClick={() => handleOnDeleteClick(food.id)}
              >
                <FaRegTrashAlt />
              </td>
            </>
          ) : null}
        </tr>
      ))
      }

      <tr tr className="bottom-bar">
        <td className="add-food">
          <Link to="/addfood">Add food</Link>
        </td>
        <td className="totals">{totalKcal.toFixed(0)}</td>
        <td className="totals">{totalProtein.toFixed(0)}</td>
        <td className="totals">{totalCarbs.toFixed(0)}</td>
        <td className="totals">{totalFat.toFixed(0)}</td>
        <tr />
      </tr>

    </>
  );
};

export default MealInfo;
