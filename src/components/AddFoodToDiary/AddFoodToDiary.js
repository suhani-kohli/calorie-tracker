import React, { useState } from "react";
import "./Styles.css";

const AddFoodToDiary = ({
  userId = "1234567890",
  date,
  foodItem,
  amount,
  size,
  protein,
  carbs,
  fat,
  calories
}) => {
  const handleAddToDiaryClick = () => {
    addFoodItemToDiary();
    // TODO: some success message
  };

  const addFoodItemToDiary = () => {
    // add to Diary
    console.log("adding to diary");
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        userId, 
        mealName: selectedMealName,
        date,
        foodItem,
        amount,
        size,
        protein,
        carbs,
        fat,
        calories,
     })
  };
  fetch('http://localhost:8080/foodlogs', requestOptions)
      .then(response => response.json())
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
