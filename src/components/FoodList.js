// import React, { useState } from "react";
// // import food from "./food";

// function FoodList({ foods }) {

//   // const [category, setCategory] = useState("")



//   return (
//     <div className="list">
//       <ul>
//         {foods.filter().map((foodz, index) => {
//           return (
//             <div>
//               <p key={foodz.id}>{foodz.name} is {foodz.category}</p>
//             </div>
//           )
//         })}
//       </ul>
//     </div>
//   );
// }

// export default FoodList;

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