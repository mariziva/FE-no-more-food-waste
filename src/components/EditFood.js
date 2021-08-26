import React, { useState, useEffect } from "react";


function EditFood({ id, food, isEditing, setIsEditing }) {
    const [foodBody, setFoodBody] = useState("");
    const [quantity, setFoodQuantity] = useState("");
    console.log(food)
    console.log(foodBody)

    function handleFormSubmit(e) {
        e.preventDefault();
        fetch(`http://127.0.0.1:9393/foods/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: foodBody,
                quantity: quantity

            }),
        })
            .then((r) => r.json())
            .then((updatedFood) => setFoodBody(updatedFood))
            .then((updatedFood) => setFoodQuantity(updatedFood))
            .then(setIsEditing(!isEditing))
            .then(window.location.reload());

    }

    return (
        <form className="edit-food" onSubmit={handleFormSubmit}>
            <input
                type="text"
                name="body"
                autoComplete="off"
                value={foodBody}
                placeholder="Name"
                onChange={(e) => setFoodBody(e.target.value)}
            />
            <br />
            <input
                type="text"
                name="quantity"
                autoComplete="off"
                value={quantity}
                placeholder="Quantity"
                onChange={(e) => setFoodQuantity(e.target.value)}
            />
            <br />
            <input type="submit" value="Save" />
        </form>
    );
}

export default EditFood;