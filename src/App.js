import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RecipeForm from './components/RecipeForm.jsx';
import Suggestion from './components/suggestion.jsx';
import './App.css';

function App() {
  const [recipe, setRecipe] = React.useState(true);
  return (
      <div className="App">
        <header className="navbar">
          <div className="logo-section">
            <img src={require('./asset/logo.png')} alt="FlavorNest Logo" className="logo" />
            <span className="brand-name">FlavorNest</span>
          </div>
        </header>
        <div className="content">
          <div className="choice">
            <div style={{backgroundColor:recipe?"green":"white"}} onClick={()=>setRecipe(!recipe)}>My Recipe</div>
            <div style={{backgroundColor:!recipe?"green":"white"}} onClick={()=>setRecipe(!recipe)} className="select ing">My Ingredients</div>
          </div>
        </div>
        {recipe ? (<RecipeForm />) : (<Suggestion />)}
      </div>
  );
}

export default App;
