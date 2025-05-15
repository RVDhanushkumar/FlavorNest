import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cards from './cards.jsx';
import './suggestion.css'; 
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

    axios.post('https://flavournestbackend.vercel.app/suggestion', {
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
    <div className="suggestion-container">
      <h2>Recipe Suggestions</h2>
      <div>
        <p>Things you have in your kitchen👩‍🍳</p>
        <div className="suggestion-search-bar">
        <input
          type="text"
          placeholder="Enter ingredients"
          className="recipe-input"
          onChange={(e) => setIngredients(e.target.value)}
        /><br />
        <input
          type="button"
          value={loading ? "Loading..." : "Get Suggestions"}
          className="search-btn"
          onClick={sug}
          disabled={loading}
        />
        </div>
      </div>
      <div className="suggestion-results">
        {!loading && suggestions.length > 0 &&(<h3>Suggestions:</h3>) &&(
            
            suggestions.map((item, index) => (
              <Cards
                key={index}
                name={item.name}
                type={item.type}></Cards>
            ))
        )}
        {!loading && suggestions.length === 0 && (
          <p style={{maxWidth:"500px",textAlign:"center"}}>Who knows this may be your best chance to impress someone with your cooking skill😉</p>
        )}
      </div>
    </div>
  );
};

export default Suggestion;
