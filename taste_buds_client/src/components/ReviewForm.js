import React from 'react'
import { Review } from '../requests'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const ReviewForm = () => {
  const createReview = (params) => {
    Review.create(params)
  }
  return <Card className="my-3" style={{width: '75vw'}}>
    <Card.Body>
    <Card.Title>Review your experience:</Card.Title>
    <Form>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>Rating</Form.Label>
      <Form.Control as="select">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
    </Form.Group>
    <Form.Group>
      <Form.Label>Review</Form.Label>
      <Form.Control as="textarea" rows={3} />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
    </Form>
    </Card.Body>
  </Card>
}

export default ReviewForm