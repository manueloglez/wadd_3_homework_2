import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const RecipeDetails = props => {
  const {image_url, created_at, title, description, story, serving, sweet, salty, spicy} = props
  return <Card style={{width: '75vw'}}>
  <Card.Img style={{maxHeight: '30rem'}} variant="top" src={image_url} />
  <Card.Body>
    <Card.Title>{title} 
    {sweet ? '🍬' : ''} 
    {salty ? '🧂' : ''}
    {spicy ? '🌶️' : ''}
    </Card.Title>
    <Card.Text>
      Posted on {new Date(created_at).toLocaleDateString()}
    </Card.Text>
    <Card.Text>
      <b>Story:</b> {story}
    </Card.Text>
    <Card.Text>
    <b>Description: </b> {description}
    </Card.Text>
    <Card.Text>
    <b>Serving Size: </b> {serving}
    </Card.Text>
    <Link to={`/recipes`}>
      <Button variant="primary">Back</Button>
    </Link>
  </Card.Body>
</Card>
}

export default RecipeDetails