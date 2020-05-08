import React from 'react'

import {Link} from 'react-router-dom'

function Results(props) {
  return (
    <div id='resultSection'>
        <h3>Search Results</h3>
        <div id='results'>
            {props.results.map(result => <Link to={`/plant/${result.id}`}><h2 key={result.id} className='result'>{result.scientific_name} {result.common_name ? `(${result.common_name})`: ''}</h2></Link>)}
        </div>
    </div>
  )
}

export default Results