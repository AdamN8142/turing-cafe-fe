import React from 'react'
import ResCard from './ResCard'

const ResContainer = ({ reservations }) => {

 const displayRes = reservations.map((res)=> {
  return <ResCard  {...res}/>
 })
 

  return (
    <div>
      {displayRes}
    </div>
  )
}



export default ResContainer 