import React from 'react'

function Results(props) {
  return (
    <div id='resultSection'>
        <h3>Search Results</h3>
        <div id='results'>
            {props.results.map(result => <h2 key={result.id} className='result'>{result.scientific_name} {result.common_name ? `(${result.common_name})`: ''}</h2>)}
        </div>
    </div>
  )
}

export default Results