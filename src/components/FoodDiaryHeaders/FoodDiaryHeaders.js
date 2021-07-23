import React from "react";
import "./Styles.css";

const FoodDiaryHeaders = ({ header }) => {
   return (
      <thead>
         <tr className="meal-header">
            <td className=" meal-name"></td>

            <td className=" nutrient-column">
               Calories
               <div className="subtitle">Kcal</div>
            </td>
            <td className=" nutrient-column">
               Protein
               <div className="subtitle">g</div>
            </td>
            <td className=" nutrient-column">
               Carbs
               <div className="subtitle">g</div>
            </td>
            <td className=" nutrient-column">
               Fat
               <div className="subtitle">g</div>
            </td>
            <td className=" nutrient-column">
               {" "}
               <div className="subtitle"> </div>
            </td>
         </tr>
      </thead>
   );
};

export default FoodDiaryHeaders;
