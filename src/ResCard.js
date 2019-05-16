import React from 'react'

const ResCard = (props) => {
  return (
    <div className='res'>
      <p>{props.name}</p>
      <p>{props.time}</p>
      <p>{props.date}</p>
    </div>
  )
}


export default ResCard;