import React from 'react'

function Height(props) {
    return (
        <>
        <div id='height'>
            <p>Max Height: {props.height}cm | Growth Rate: {props.growth}</p>
            <div id='pot'></div>
        </div>
        </>
    )
}

export default Height