// RecipeDetails.js
import React from 'react';

const RecipeDetails = ({ recipe, onBack }) => {
    return (
        <div className="recipe-details">
            <button onClick={onBack}>Back to Results</button>
            <h2>{recipe.title}</h2>
            <img src={recipe.image} alt={recipe.title} />
            <h4>Ingredients:</h4>
            <ul>
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h4>Instructions:</h4>
            <ol>
                {recipe.instructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                ))}
            </ol>
        </div>
    );
};

export default RecipeDetails;
