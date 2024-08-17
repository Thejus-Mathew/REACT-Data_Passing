import React from 'react'
import Employee from './Employee'

function User1({usenam,useage,usenum,useema}) {
  return (
    <div>
      <p>Name: {usenam}</p>
      <p>Age: {useage}</p>
      <p>Phone No: {usenum}</p>
      <p>Email: {useema}</p>
      <Employee/>
    </div>

  )
}

export default User1
