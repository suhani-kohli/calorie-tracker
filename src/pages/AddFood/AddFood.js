import React, { useState } from "react";
import "./Styles.css";


const food = {
    amount: "",
    size: "",
    foodText: ""
};

const AddFood = ({ date }) => {
    const [inputFood, setInputFood] = useState(food);

    const handleSubmit = e => {
        e.preventDefault();
        console.log("get food details");
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
