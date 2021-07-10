import React from 'react'
import StarsComponent from './StarsComponent'
import Card from 'react-bootstrap/Card'

const ReviewDetails = (props) => {
  return <Card style={{width: '75vw'}}>
    <Card.Body>
      <Card.Title> <StarsComponent rating={props.rating} /></Card.Title>
      <Card.Subtitle className="mb-2 text-muted">By: {props.user.first_name}</Card.Subtitle>
      <Card.Text>
        {props.body}
      </Card.Text>
    </Card.Body>
  </Card>  
}

export default ReviewDetails