import React from "react";
import Food from "./Food";
// import food from "./food";

function FoodList({
    onFoodDelete,
    foods,
}) {
  return (
    <div className="list">
      <ul>
        {foods.map((food) => (
          <span>{food.name}</span>,
          <Food
          food={food}
         onFoodDelete={onFoodDelete}
          key={food.id}
        />

        ))}
      </ul>
    </div>
  );
}

export default FoodList;