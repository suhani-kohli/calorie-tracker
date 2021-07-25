import React, { useState } from "react";
import "./Styles.css";

const AddFoodToDiary = ({
  userId = "1234567890",
  date,
  foodText,
  amount,
  size,
  protein,
  carbs,
  fat
}) => {
  const handleAddToDiaryClick = () => {
    addFoodItemToDiary();
    // TODO: some success message
  };

  const addFoodItemToDiary = () => {
    // add to Diary
    console.log("wadding to diary");
  };
  const meals = ["Breakfast", "Lunch", "Dinner"];
  const [selectedMealName, setSelectedMealName] = useState("Breakfast");

  return (
    <div>
      <button
        className="add-food-item-to-diary add-food-item-button"
        onClick={() => handleAddToDiaryClick()}
      >
        {`Add to ${selectedMealName}`}
      </button>
      <select
        className="add-food-item-to-diary add-food-item-select"
        value={selectedMealName}
        onChange={e => setSelectedMealName(e.target.value)}
      >
        {meals.map(meal => (
          <option value={meal}>{meal}</option>
        ))}
      </select>
    </div>
  );
};

export default AddFoodToDiary;
