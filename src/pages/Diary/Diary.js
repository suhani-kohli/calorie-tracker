import React from 'react'
import FoodDiaryHeaders from '../../components/FoodDiaryHeaders';
import './Styles.css'

const Diary = () => {
    const selectedDate = "02-11-2019";
    return (
        <div>
            <div className="food-diary">
                <span className="heading">
                    <h1 className="headerText">Your food diary for: </h1>
                    <button className="food-diary-button prev" onClick={() => { }}>
                        {"<--"}
                    </button>
                    <h1 className="Datebutton">{selectedDate}</h1>
                    <button className="food-diary-button next" onClick={() => { }}>
                        {"-->"}
                    </button>
                </span>
                <div className="food-diary-container">
                    <FoodDiaryHeaders />
                </div>
            </div>
        </div>
    )
}

export default Diary;
