import React from 'react'

function Water(props) {
    let style = {}
    if (props.water === 'Low') {
      style.backgroundColor = 'rgb(184, 184, 255)';
    } else if (props.water === 'Medium') {
      style.backgroundColor = 'rgb(133, 133, 250)';
    } else if (props.water === 'High') {
      style.backgroundColor = 'rgb(56, 56, 255)';
      style.color = 'white'
    } else {
      style.backgroundColor = 'white'
    }

    return (
      <>
      <div id='water' style={style}>
          <p>Water needs</p>
          <p>{props.water ? props.water : '-'}</p>
      </div>
      </>
    )
  }
  
  export default Water