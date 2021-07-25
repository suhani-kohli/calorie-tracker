import React, { useEffect, useState } from "react";
import "./Styles.css";
import { app_id, app_key } from "../../constants/AppConstants";


const AddFood = ({ date }) => {
    const [food, setFood] = useState({
        amount: "",
        size: "",
        foodText: ""
    });
    const [inputFood, setInputFood] = useState(food);

    useEffect(() => {
        const url = `https://api.edamam.com/api/nutrition-data?app_id=${app_id}&app_key=${app_key}&ingr=${food.amount}%20${food.size}%20${food.foodText}`;
        fetch(url)
            .then(response => response.json())
            .then(result => {
                console.log(result);
                console.log(url);
            })
            .catch(error => console.log("Fetch error: ", error.message));
    }, [food]);

    const handleSubmit = e => {
        e.preventDefault();
        setFood(inputFood);
    };

    return (
        <div className="add-food-page">
            <h1>add food to diary</h1>
            <form action="Search" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="FOOD - oats, eggs"
                    value={inputFood.foodText}
                    onChange={e => {
                        setInputFood({ ...inputFood, foodText: e.target.value });
                    }}
                    required
                />
                <input
                    type="text"
                    placeholder="AMOUNT - 100g, 5, 1l"
                    value={inputFood.amount}
                    onChange={e => {
                        setInputFood({ ...inputFood, amount: e.target.value });
                    }}
                    required
                />
                <input
                    type="text"
                    placeholder="SIZE - (optional) large"
                    value={inputFood.size}
                    onChange={e => {
                        setInputFood({ ...inputFood, size: e.target.value });
                    }}
                />

                <button className="add-food-page__search">Search</button>
            </form>
        </div>
    );
};

export default AddFood;
