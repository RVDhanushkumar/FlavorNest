import React, { useState } from 'react';
import axios from 'axios';
import './RecipeForm.css';

const RecipeForm = () => {
  const [food, setFood] = useState('');
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchRecipe = async () => {
    if (!food.trim()) return;
    setLoading(true);
    setError('');
    
    try {
      const response = await axios.post('http://localhost:3001/recipe', {
        foodItem: food,
      });
      setRecipe(response.data);
    } catch (err) {
      setError('Failed to fetch recipe. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const renderIngredients = () => {
    return (
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    );
  };

  const renderSteps = () => {
    return recipe.instructions.map((step, index) => (
      <p key={index}><span style={{fontWeight:"bolder"}}>Step {index+1}:</span> {step}</p>
    ));
  };

  return (
    <div className="recipe-container">
      <div className="left-section">
        <h2 className="heading">Let's cook something..</h2>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Enter recipe name.."
            className="recipe-input"
            value={food}
            onChange={(e) => setFood(e.target.value)}
          />
          <button className="search-btn" onClick={fetchRecipe}>
            Search 👩‍🍳
          </button>
        </div>

        {loading ? (
          <div className="shimmer shimmer-box" style={{display:"grid",placeContent:"center"}}>Searching for you special dish</div>
        ) : (
          <div>  
            Cooking is an art, but all art requires knowing something about the medium.
          </div>
        )}

        {error && <p className="error">{error}</p>}

        {recipe && (
          <div className="ingredients-process">
            <h3>🧂 Ingredients required:</h3>
            <ul>{renderIngredients()}</ul>

            <h3>👩‍🍳 Process to follow:</h3>
            {renderSteps()}
          </div>
        )}
      </div>

      <div className="right-section">
        <div className="image-circle image1"></div>
        <div className="image-circle image2"></div>
        <div className="image-circle image3"></div>
      </div>
    </div>
  );
};

export default RecipeForm;
