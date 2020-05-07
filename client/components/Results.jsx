import React from 'react'

function Results(props) {
  return (
    <div>
        <h3>Search Results</h3>
        <div id='results'>
            {props.results.map(result => <h2 className='result'>{result.common_name}</h2>)}
        </div>
    </div>
  )
}

export default Results