import React, { useState } from "react";


function NewFoodForm({ addNewFoodItem }){

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [unit, setUnit] = useState('');
    const [category, setCategory] = useState('');
    const [daysUntilExpiration, setDaysUntilExpiration] = useState(0);
    const [dateOfPurchase, setDateOfPurchase] = useState(new Date());

    function handleSubmit(e) {
        e.preventDefault();
        fetch('http://localhost:9393/foods', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            quantity: quantity,
            unit: unit,
            category: category,
            daysUntilExpiration: daysUntilExpiration,
            dateOfPurchase: dateOfPurchase
          }),
        })
        .then(res => res.json())
        .then(newFoodItem => addNewFoodItem(newFoodItem));
        setName("")
        setQuantity(1)        
        setUnit('')
        setCategory('')
        setDaysUntilExpiration(0)
        setDateOfPurchase(new Date())
      }
      return (
        <div className="new-food-item-form">
        <h2>Add New Food</h2>
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            name="name" 
            placeholder="Food name" 
            value={name} 
            onChange={(e) => {setName(e.target.value)}}
            />
            <input 
            type="number" 
            name="quantity" 
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => {setQuantity(e.target.value)}} 
            />
            <input 
            type="text" 
            name="unit" 
            placeholder="Unit"
            value={unit}
            onChange={(e) => {setUnit(e.target.value)}}
            />
            <input 
            type="text" 
            name="category"  
            placeholder="Category"
            value={category}
            onChange={(e) => {setCategory(e.target.value)}}
            />
            <input
            type="number"
            name="daysUntilExpiration"
            placeholder="Number of days until expiration"
            value={daysUntilExpiration}
            onChange={(e) => {setDaysUntilExpiration(e.target.value)}}
            />
            <input 
            type="datetime-local"
            name="dateOfPurchase"
            placeholder="Date purchased"
            value={dateOfPurchase}
            onChange={(e) => {setDateOfPurchase(e.target.value)}}
            />
            <button type="submit">Add New Item To Fridge</button>
        </form>
        </div>
    );
}
    
export default NewFoodForm;