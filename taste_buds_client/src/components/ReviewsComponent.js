import React from 'react'
import ReviewDetails from './ReviewDetails'
import ReviewForm from './ReviewForm'

const ReviewsComponent = (props) => {
  const {reviews, createReview, recipeId} = props

  return <> 
    <ReviewForm createReview={createReview} recipeId={recipeId} />
    {reviews.map((review, id) => {
      return <ReviewDetails key={id} {...review}/>
    })
    }
  </>
}

export default ReviewsComponent