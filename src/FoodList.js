import React from "react";
// import food from "./food";

function FoodList({
    
  foods,
}) {
  return (
    console.log(foods),
    <div className="list">
      <ul>
        {foods.map((food) => (
          
          <p key={food.id}>{food.name}</p>
        ))}
      </ul>
    </div>
  );
}

export default FoodList;