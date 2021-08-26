import React, { useState } from "react";
import EditFood from "./EditFood";

function Food({ food, currentFood, onFoodDelete }) {
    const [isEditing, setIsEditing] = useState(false);

    const { id, body } = food


    function handleDeleteClick() {
        fetch(`http://127.0.0.1:9393/foods/${id}`, {
            method: "DELETE",
        });

        onFoodDelete(id);
    }

    function handleUpdateFood(updatedFood) {
        setIsEditing(false);
        // onUpdateFood(updatedFood);
    }

    function handleClick(e){
        setIsEditing(!isEditing)
    }

    return (

        <li>
            {isEditing ? (
                <EditFood
                    id={id}
                    body={body}
                    onUpdateFood={handleUpdateFood}
                />
            ) : (
                <p>{body}</p>
            )}
            <div className="actions">
                <span role="img" aria-label="delete">
                    <p onClick={handleClick}>{food.name}</p>
                </span>
                <button onClick={handleDeleteClick}> Delete
                </button >
            </div>
        </li>
    );
}

export default Food;