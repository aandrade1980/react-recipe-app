import React, { useState, useEffect } from 'react';
import './App.css';

import Form from './components/Form';
import Recipes from './components/Recipes';
import { searchRecipesByText } from './hooks';

function App() {
  const localStorageRecipes = localStorage.getItem('recipes');
  const initialRecipes = localStorageRecipes ? JSON.parse(localStorageRecipes) : [];
  const [recipes, setRecipes] = useState(initialRecipes);
  
  useEffect(() => localStorage.setItem('recipes', JSON.stringify(recipes)), [recipes]);

  const getRecipe = e => {
    e.preventDefault();
    const query = e.target.elements.recipeName.value;
    searchRecipesByText(query)
      .then(recipes => setRecipes(recipes))
      .catch(err => console.log('Error: ', err));
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Recipe Search</h1>
      </header>
      <Form getRecipe={ getRecipe } />
      <Recipes recipes={ recipes } />
    </div>
  );
}

export default App;
