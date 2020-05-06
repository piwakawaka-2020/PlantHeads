import React from 'react'

function Water(props) {
    return (
      <div id='water'>
          <p>Water needs</p>
          <p>{props.water}</p>
      </div>
    )
  }
  
  export default Water