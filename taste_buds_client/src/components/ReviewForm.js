import React from 'react'
import { Review } from '../requests'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const ReviewForm = (props) => {
  const handleSubmit = event => {
    const { currentTarget } = event
    event.preventDefault()

    const formData = new FormData(currentTarget)
    const reviewData = {
      body: formData.get('review'),
      rating: formData.get('rating'),
    }

    console.log(reviewData)
    
    Review.create(props.recipeId, reviewData).then(res => {
      console.log(res)
      window.location.reload()
    })
  }

  return <Card className="my-3" style={{width: '75vw'}}>
    <Card.Body>
    <Card.Title>Review your experience:</Card.Title>
    <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>Rating</Form.Label>
      <Form.Control name="rating" as="select">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
    </Form.Group>
    <Form.Group>
      <Form.Label>Review</Form.Label>
      <Form.Control name="review" as="textarea" rows={3} />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
    </Form>
    </Card.Body>
  </Card>
}

export default ReviewForm