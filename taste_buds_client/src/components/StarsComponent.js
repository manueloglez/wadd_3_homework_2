import React from 'react'

const StarsComponent = (props) => {
  return <h3>{Array.from(Array(5)).map((e, i) => {
    return i < props.rating ? '⭐' : '⚪'
  }).join(' ')} </h3>
}

export default StarsComponent