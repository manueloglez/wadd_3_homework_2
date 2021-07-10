import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const RecipePreview = props => {
  const {image_url, id, created_at, title} = props
  return <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image_url} />
  <Card.Body>
    <Card.Title>{id} - {title}</Card.Title>
    <Card.Text>
      Posted on {new Date(created_at).toLocaleDateString()}
    </Card.Text>
    <Link to={`/recipes/${id}`}>
      <Button variant="primary">Full details</Button>
    </Link>
  </Card.Body>
</Card>
}

export default RecipePreview