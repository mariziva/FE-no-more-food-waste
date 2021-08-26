import React, { useState } from "react";
// import food from "./food";

function FoodList({ handleSubmit, foods }) {

  const [category, setCategory] = useState("")

  

  return (
    <div className="list">
      <ul>
      {foods.filter(food => food.id).map((foodz, index) =>  {
          return(
        <div>
          <p key={foodz.id}>{foodz.name} is {foodz.category}</p>
          <form onSubmit={handleSubmit}>
              <input type="text" name="category"
              value={category}
              onChange={(e) => {setCategory(e.target.value)}}
              />
            <input type="submit" value="Submit" />
          </form>
          
          </div>
        )})}
      </ul>
    </div>
  );
}

export default FoodList;