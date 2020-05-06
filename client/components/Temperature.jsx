import React from 'react'

function PhMeter(props) {
    return (
      <div id='temperature'>
          <p>Min Temp</p>
          <p>{props.temp.toFixed(1)}</p>
      </div>
    )
  }
  
  export default PhMeter