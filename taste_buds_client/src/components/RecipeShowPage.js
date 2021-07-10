import React, { useEffect, useState } from 'react'
import { Recipe } from '../requests'
import RecipeDetails from './RecipeDetails'
import ReviewsComponent from './ReviewsComponent'

const RecipeShowPage = (props) => {
  const [recipe, setRecipe] = useState({reviews: []})

  const createReview = (params) =>{
    console.log(params)
  }
  
  useEffect(() => {
    const { params } = props.match
    Recipe.show(params.id).then(recipe => {
      setRecipe(recipe)
    })
  }, [])

  return <>
    <RecipeDetails {...recipe} />
    <ReviewsComponent reviews={recipe.reviews} createReview={createReview}/>
  </>
}

export default RecipeShowPage