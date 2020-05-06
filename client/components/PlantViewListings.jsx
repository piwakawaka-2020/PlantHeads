import React from 'react'

function PlantViewListings(props) {
    return (
      <div id='plantViewListings'>
          <h3>Current Listings</h3>
          <div id='plantViewListingsContainer'>
            <div className='listing'></div>
            <div className='listing'></div>
            <div className='listing'></div>
          </div>
      </div>
    )
  }
  
  export default PlantViewListings