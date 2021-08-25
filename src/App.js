import React, { useEffect, useState } from "react";
import FoodList from "./FoodList";
import './App.css';


function App() {
  const [foods, setfood] = useState([]);
  // const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:9393/foods")
      .then((r) => r.json())
      .then((foods) => setfood(foods));
  }, []);

  return (
    <div className="App">
      <FoodList foods= {foods}/>
    </div>
  );
}

export default App;