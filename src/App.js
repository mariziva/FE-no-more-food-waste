import React, { useEffect, useState } from "react";
import FoodList from "./FoodList";
import './App.css';


function App() {
  const [foods, setFoods] = useState([]);
  
  // const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:9393/foods")
      .then((r) => r.json())
      .then((foods) => setFoods(foods));
  }, []);

  function handleDeleteFood(id) {
    const updatedFoods = foods.filter((food) => food.id !== id);
    setFoods(updatedFoods);
  }

  return (
    <div className="App">
      <div className="card">
        <h1>Food Items</h1>
      <FoodList  foods= {foods}
        onFoodDelete={handleDeleteFood}
      />
    </div>
    </div>
  );
}

export default App;