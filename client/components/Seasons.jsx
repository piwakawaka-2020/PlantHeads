import React from 'react'

function Seasons(props) {
    return (
      <div>
          <h3>Seasonal info</h3>
          <div id='seasons'>
            <div id='summer' className='season'>Summer</div>
            <div id='autumn' className='season'>Autumn</div>
            <div id='winter' className='season'>Winter</div>
            <div id='spring' className='season'>Spring</div>
          </div>
      </div>
    )
  }
  
  export default Seasons