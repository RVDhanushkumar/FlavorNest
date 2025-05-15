import React from 'react';
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
            <div style={{backgroundColor:recipe?"green":"white", padding:"10px",width:"100%", color:recipe?"white":"black",borderRadius:"10px",transition:"0.5s",textAlign:"center",display:"grid",placeContent:"center"}} onClick={()=>setRecipe(!recipe)}>My Recipe</div>
            <div style={{backgroundColor:!recipe?"green":"white", padding:"10px",width:"100%", color:!recipe?"white":"black",borderRadius:"10px",transition:"0.5s",textAlign:"center",display:"grid",placeContent:"center"}} onClick={()=>setRecipe(!recipe)} className="select ing">My Ingredients</div>
          </div>
        </div>
        {recipe ? (<RecipeForm />) : (<Suggestion />)}
      </div>
  );
}

export default App;
