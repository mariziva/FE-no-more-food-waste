import React, { useState } from "react";
import EditFood from "./EditFood";

function Message({ food, currentFood, onFoodDelete, onUpdateFood }) {
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
        onUpdateFood(updatedFood);
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
            <button onClick={handleDeleteClick}>
            <span role="img" aria-label="delete">
                🗑 {food.name}
            </span>
            </button>
        </div>
    </li>
    );
}

export default Message;