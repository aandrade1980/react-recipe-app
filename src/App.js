import React, { useState } from 'react';
import './App.css';

import Form from './components/Form';
import Recipes from './components/Recipes';

const API_KEY = '845558b03f426f8f1b46c3c916a58c11';
const default_query = 'shredded%20chicken';

function App() {
  const [recipes, setRecipes] = useState([]);
  
  const getRecipe = async e => {
    e.preventDefault();
    const recipeName = e.target.elements.recipeName.value || default_query;
    const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`);
    const data = await api_call.json();
    console.log(data);
    if(data.error === "limit") {
      return setRecipes([]);
    }
    return setRecipes(data.recipes);
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
