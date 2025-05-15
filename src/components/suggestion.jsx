import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Suggestion = () => {
  const [ingredients, setIngredients] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  function sug() {
    setLoading(true);
    if (!ingredients.trim()) {
      setLoading(false);
      return;
    }

    axios.post('http://localhost:3001/suggestion', {
      ingredients: ingredients,
    })
    .then((response) => {
      console.log(response.data.Suggestion);
      setSuggestions(response.data.Suggestion || []);
      setLoading(false);
    })
    .catch((error) => {
      console.error('Error fetching suggestions:', error);
      setLoading(false);
    });
  }

  useEffect(() => {
    console.log('Suggestions updated:', suggestions);
  }, [suggestions]);

  return (
    <div>
      <h2>Recipe Suggestions</h2>
      <div>
        <p>Things you have in your home</p>
        <input
          type="text"
          placeholder="Enter ingredients"
          className="recipe-input"
          onChange={(e) => setIngredients(e.target.value)}
        />
        <input
          type="button"
          value={loading ? "Loading..." : "Get Suggestions"}
          className="search-btn"
          onClick={sug}
          disabled={loading}
        />
      </div>
      <div>
        {!loading && suggestions.length > 0 && (
          <ul>
            {suggestions.map((item, index) => (
              <li key={index}>{item.name} - {item.type}</li>
            ))}
          </ul>
        )}
        {!loading && suggestions.length === 0 && (
          <p>No suggestions available.</p>
        )}
      </div>
    </div>
  );
};

export default Suggestion;
