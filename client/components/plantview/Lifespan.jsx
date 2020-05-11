import React from 'react'

function Lifespan(props) {
    let style = {}

    if (props.lifespan === 'Long') {
      style.backgroundColor = 'rgb(165, 77, 42)';
      style.color = 'white'
    } else {
      style.backgroundColor = 'rgb(163, 116, 98)';
    }

    return (
        <div id='lifespan' style={style}>
            <p>Lifespan</p>
            <p>{props.lifespan ? props.lifespan : '-'}</p>
        </div>
    )
}

export default Lifespan