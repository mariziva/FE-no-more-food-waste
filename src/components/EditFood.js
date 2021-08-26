import React, { useState } from "react";


function EditFood({ id, body, onUpdateFood }) {
    const [foodBody, setFoodBody] = useState("");

    console.log(foodBody)

    function handleFormSubmit(e) {
        e.preventDefault();
        console.log(foodBody)
        fetch(`http://127.0.0.1:9393/foods/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: foodBody
            }),
        })
            .then((r) => r.json())
            .then((updatedFood) => onUpdateFood(updatedFood));
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
            <input type="submit" value="Save" />
        </form>
    );
}

export default EditFood;