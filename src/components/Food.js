import React, { useState } from "react";
import EditFood from "./EditFood";

function Food({ food, currentFood, onFoodDelete }) {
    const [isEditing, setIsEditing] = useState(false);

    const { id, name } = food


    function handleDeleteClick() {
        fetch(`http://127.0.0.1:9393/foods/${id}`, {
            method: "DELETE",
        });

        onFoodDelete(id);
    }

    function handleUpdateFood(updatedFood) {
        setIsEditing(!isEditing)
    }

    function handleClick(e) {
        setIsEditing(!isEditing)
    }

    return (

        <li>
            {isEditing ? (
                <EditFood
                    id={id}
                    name={name}
                    food={food}
                    onUpdateFood={handleUpdateFood}
                />
            ) : (
                <p onClick={handleClick}>{food.name}</p>
            )}
            <div className="actions">
                <span role="img" aria-label="delete">
                </span>
                <button onClick={handleDeleteClick}> Delete
                </button >
            </div>
        </li>
    );
}

export default Food;