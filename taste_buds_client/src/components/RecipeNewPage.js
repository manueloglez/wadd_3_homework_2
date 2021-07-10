import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Recipe } from '../requests'


const RecipeNewPage = (props) => {
  const handleSubmit = event => {
    const { currentTarget } = event
    event.preventDefault()

    const formData = new FormData(currentTarget)
    const recipeData = {
      title: formData.get('title'),
      serving: formData.get('serving'),
      description: formData.get('description'),
      story: formData.get('story'),
      image_url: formData.get('image_url'),
      spicy: formData.get('spicy') ? true : false,
      sweet: formData.get('sweet') ? true : false,
      salty: formData.get('salty') ? true : false,
      }

    console.log(recipeData)
    
    Recipe.create(recipeData).then(res => {
      props.history.push(`/recipes/${res.id}`)
    })
  }

  return <Card className="my-3" style={{width: '75vw'}}>
    <Card.Body>
    <Card.Title>Share your recipe:</Card.Title>
    <Form onSubmit={handleSubmit}>
    <Form.Group>
      <Form.Label>Title</Form.Label>
      <Form.Control name="title" type="text" placeholder="Your title..." />
      <Form.Label>Story</Form.Label>
      <Form.Control name="story" as="textarea" rows={2} />
      <Form.Label>Description</Form.Label>
      <Form.Control name="description" as="textarea" rows={3} />
      <Form.Label>Serving size</Form.Label>
      <Form.Control name="serving" type="number" min={0} placeholder="1-50"/>
      <Form.Label>Link to your image</Form.Label>
      <Form.Control name="image_url" type="text" placeholder="Path to your image..." />
      <Form.Label>This recipe is...</Form.Label>
      <Form.Check label="spicy" name="spicy"/>
      <Form.Check label="sweet" name="sweet"/>
      <Form.Check label="salty" name="salty"/>
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
    </Form>
    </Card.Body>
  </Card>
}

export default RecipeNewPage