// App.js
import React, { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';
import RecipeDetails from './RecipeDetails';
import './App.css';

const App = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [recipeResults, setRecipeResults] = useState([]);
    const [selectedRecipe, setSelectedRecipe] = useState(null);

    useEffect(() => {
        // Fetch recipes based on the search query
        const fetchRecipes = async () => {
            try {
                const response = await fetch(`https://api.example.com/recipes?search=${searchQuery}`);
                const data = await response.json();
                setRecipeResults(data.results);
            } catch (error) {
                console.error('Error fetching recipes:', error);
            }
        };

        if (searchQuery !== '') {
            fetchRecipes();
        }
    }, [searchQuery]);

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchQuery(e.target.elements.searchInput.value);
    };

    const handleRecipeClick = (recipe) => {
        setSelectedRecipe(recipe);
    };

    const handleBackToResults = () => {
        setSelectedRecipe(null);
    };

    return (
        <div className="app">
            <h1>Recipe Finder</h1>
            {!selectedRecipe ? (
                <div>
                    <form onSubmit={handleSearch}>
                        <input type="text" name="searchInput" placeholder="Enter ingredients or recipe name" />
                        <button type="submit">Search</button>
                    </form>
                    <div className="recipe-list">
                        {recipeResults.map((recipe) => (
                            <RecipeCard key={recipe.id} recipe={recipe} onClick={handleRecipeClick} />
                        ))}
                    </div>
                </div>
            ) : (
                    <RecipeDetails recipe={selectedRecipe} onBack={handleBackToResults} />
                )}
        </div>
    );
};

export default App;
