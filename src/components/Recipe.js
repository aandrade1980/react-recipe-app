import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { searchRecipesById } from '../hooks';

const Recipe = props => {
  const { id } = props.match.params;
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    searchRecipesById(id)
      .then(response => setRecipe(response))
      .catch(error => console.log('Error: ', error));
  }, [id]);
  
  return (
    <div className="container">
      { recipe && 
        <div className="active-recipe">
        <img src={ recipe.image_url } className="active-recipe__img" alt={ recipe.title } />
        <h3 className="active-recipe__title">{ recipe.title }</h3>
        <h4 className="active-recipe__publisher">
          Publisher: <span>{ recipe.publisher }</span>
        </h4>
        <p className="active-recipe__website">
          Website: <span><a href={ recipe.publisher_url}>{ recipe.publisher_url }</a></span>
        </p>
        <button className="active-recipe__button"><Link to="/">Go Home</Link></button>
      </div>
      }
    </div>
  )
}

export default Recipe;
