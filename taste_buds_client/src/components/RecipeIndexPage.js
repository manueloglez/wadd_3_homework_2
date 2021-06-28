import React, {useEffect} from 'react'
import {Recipe} from '../requests'

const RecipeIndexPage = () => {

  useEffect(() => {
    Recipe.index()
    .then(console.table)
  }, [])

  return <h1>Recipes</h1>
}

export default RecipeIndexPage