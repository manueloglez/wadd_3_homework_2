import React from 'react'
import ReviewDetails from './ReviewDetails'
import ReviewForm from './ReviewForm'

const ReviewsComponent = (props) => {
  const {reviews, createReview} = props

  return <> 
    <ReviewForm createReview={createReview} />
    {reviews.map((review, id) => {
      return <ReviewDetails key={id} {...review}/>
    })
    }
  </>
}

export default ReviewsComponent