import React from 'react'
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
            </div>
        </div>
    )
}

export default Diary;
