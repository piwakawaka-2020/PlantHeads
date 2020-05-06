import React from 'react'

function PhMeter(props) {
    return (
      <div id='phMeter'>
          <p>Ideal PH</p>
          <p>{props.min}-{props.max}</p>
      </div>
    )
  }
  
  export default PhMeter