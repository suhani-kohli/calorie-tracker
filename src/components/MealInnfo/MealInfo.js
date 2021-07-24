import React from "react";
import { Link } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";

const MealInfo = ({ date, mealName }) => {
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
                {`${food.foodItem}, ${food.amount}
                  ${food.size !== "" && food.size !== "0" ? " " + food.size : ""
                  }`}
              </td>
              <td className="macros">{food.protein}</td>
              <td className="macros">{food.carbs}</td>
              <td className="macros">{food.fat}</td>
              <td
                className="delete"
                onClick={() => handleOnDeleteClick(food.id)}
              >
                <FaRegTrashAlt />
              </td>
            </>
          ) : null}
        </tr>
      ))}

      <tr className="bottom-bar">
        <td className="add-food">
          <Link to="/addfood">Add food</Link>
        </td>
      </tr>
    </>
  );
};

export default MealInfo;
