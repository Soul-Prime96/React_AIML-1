// created from rfce
import React from 'react'

function Greeting({name,course,marks}) {
  return (
    <div>
        <h1> Student Information</h1>
        <h3>{name}</h3>
        <p> Course:{course}</p>
        <p>Marks:{marks}</p>



    </div>
  )
}

export default Greeting
