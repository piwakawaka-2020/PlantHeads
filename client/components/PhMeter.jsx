import React from 'react'

function PhMeter(props) {
    let style = {}
    const average = (props.min + props.max) / 2

    if (average <= 7) {
      style.backgroundColor = 'rgb(241, 97, 40)';
    } else {
      style.backgroundColor = 'rgb(184, 184, 255)';
    }

    return (
      <div id='phMeter' style={style}>
          <p>Ideal PH</p>
          <p>{props.min}-{props.max}</p>
      </div>
    )
  }
  
  export default PhMeter