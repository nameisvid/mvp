import React from 'react';

const RecipeCard = ({ recipe, onClick }) => {
    return (
        <div className="recipe-card" onClick={() => onClick(recipe)}>
            <img src={recipe.image} alt={recipe.title} />
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
        </div>
    );
};

export default RecipeCard;
