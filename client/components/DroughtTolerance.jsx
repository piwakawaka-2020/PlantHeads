import React from 'react'

function DroughtTolerance(props) {
    return (
      <div id='drought'>
          <p>Drought</p>
          <p>Tolerance</p>
          <p>{props.drought}</p>
      </div>
    )
  }
  
  export default DroughtTolerance