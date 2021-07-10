import React, {useEffect, useState} from 'react'
import {Recipe} from '../requests'
import RecipePreview from './RecipePreview'
import {Row, Col} from 'react-bootstrap'

const RecipeIndexPage = () => {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    Recipe.index().then(recipes => {
      setRecipes(recipes)
    })
  }, [])

  return <Row xs={2} md={4} className="g-4">
    {recipes.map(recipe => {
      return <Col>
        <RecipePreview {...recipe} />
      </Col>
    })}
  </Row>
}

export default RecipeIndexPage