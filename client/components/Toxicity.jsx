import React from 'react'

function Toxicity(props) {
    let style = {}

    if (props.toxicity === 'Severe') {
      style.backgroundColor = 'green'
      style.color = 'white'
    } else {
      style.backgroundColor = 'rgb(125, 209, 125)'
    }

    return (
      <div id='toxicity' style={style}>
          <p>Toxicity</p>
          <p>{props.toxicity ? props.toxicity : 'No data'}</p>
      </div>
    )
  }
  
  export default Toxicity