import React, { useState } from "react";


function EditFood({ id, food, onUpdateFood }) {
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
            .then(onUpdateFood());

    }

    return (
        <form className="edit-food" onSubmit={handleFormSubmit}>
            <input
                type="text"
                name="body"
                autoComplete="off"
                value={foodBody}
                onChange={(e) => setFoodBody(e.target.value)}
            />
            <input
                type="text"
                name="quantity"
                autoComplete="off"
                value={quantity}
                onChange={(e) => setFoodQuantity(e.target.value)}
            />
            <input type="submit" value="Save" />
        </form>
    );
}

export default EditFood;