import React from 'react'

function Temperature(props) {
    let style = {}

    if (props.temp <= 0) {
      style.backgroundColor = 'rgb(184, 184, 255)';
    } else {
      style.backgroundColor = 'rgb(241, 97, 40)';
      style.color = 'white'
    }

    return (
      <div id='temperature' style={style}>
          <p>Min Temp</p>
          <p>{props.temp.toFixed(1)}°</p>
      </div>
    )
  }
  
  export default Temperature