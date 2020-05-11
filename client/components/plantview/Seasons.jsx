import React from 'react'

function Seasons(props) {
    const seasons = props.growthPeriod.split(' ')
    console.log(seasons)
    return (
      <div>
          <h3>Seasonal info</h3>
          <div id='seasons'>
            <div id='summer' className='season'>Summer<br/>{seasons.indexOf('Summer') > -1 ? <span className='growthTime'>Growth</span>: ''}</div>
            <div id='autumn' className='season'>Autumn<br/>{seasons.indexOf('Autumn') > -1 ? <span className='growthTime'>Growth</span>: ''}</div>
            <div id='winter' className='season'>Winter<br/>{seasons.indexOf('Winter') > -1 ? <span className='growthTime'>Growth</span>: ''}</div>
            <div id='spring' className='season'>Spring<br/>{seasons.indexOf('Spring') > -1 ? <span className='growthTime'>Growth</span>: ''}</div>
          </div>
      </div>
    )
  }
  
  export default Seasons