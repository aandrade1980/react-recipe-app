import React from 'react'

function Form({ getRecipe }) {
  return (
    <form onSubmit={ getRecipe } style={{ marginBottom: "2rem" }}>
      <input className="form__input" type="text" name="recipeName" />
      <button className="form__button">Search</button>
    </form>
  )
}

export default Form
