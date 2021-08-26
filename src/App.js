import React, { useEffect, useState } from "react";
import FoodList from "./components/FoodList";
import NewFoodForm from "./components/NewFoodForm";
import './App.css';


function App() {
  const [foods, setFoods] = useState([]);
  // const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:9393/foods")
      .then((r) => r.json())
      .then((foods) => setFoods(foods));
  }, []);

  const addNewFoodItem = (foodItem) => {
    const newFood = [...foods, foodItem];
    setFoods(newFood);
  }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   fetch(`http://127.0.0.1:9393/foods/${foods.id}`, {
  //     method: "PATCH",
  //     headers: { 'Content-Type': 'application/json' },
  //     // 'Accept': 'application/json'},
  //     body: JSON.stringify({ id: foods.id, category: foods.category })
  //   })
  //     .then(r => r.json())
  //     .then(updatedFood => setFoods(updatedFood))
  // }

  function handleDeleteFood(id) {
    const updatedFoods = foods.filter((food) => food.id !== id);
    setFoods(updatedFoods);
  }

  return (
    <div className="App">

      <h1>Welcome to your virtual fridge</h1>
      <h2>Add items, edit their names/quantities, or delete</h2>
      <div className="card">
      <NewFoodForm addNewFoodItem={addNewFoodItem} />
      <FoodList foods={foods} onFoodDelete={handleDeleteFood} />
      </div>
    </div>

    
  );
}

export default App;