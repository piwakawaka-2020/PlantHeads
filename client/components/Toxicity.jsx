import React from 'react'

function Toxicity(props) {
    return (
      <div id='toxicity'>
          <p>Toxicity</p>
          <p>{props.toxicity}</p>
      </div>
    )
  }
  
  export default Toxicity