import React from 'react'

function DroughtTolerance(props) {
    let style = {}

    if (props.drought === 'High') {
      style.backgroundColor = 'rgb(233, 155, 53)'
      style.color = 'white'
    } else {
      style.backgroundColor = 'rgb(235, 190, 132)'
    }

    return (
      <div id='drought' style={style}>
          <p>Drought</p>
          <p>Tolerance</p>
          <p>{props.drought ? props.drought : '-'}</p>
      </div>
    )
  }
  
  export default DroughtTolerance