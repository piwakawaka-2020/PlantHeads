import React from 'react'

function PlantViewListings(props) {
    return (
      <div id='plantViewListings'>
          <h3>Current Listings</h3>
          <div id='plantViewListingsContainer'>
            {props.listings.map(listing => <div key={listing.id} className='listing'>
              <p>{listing.username}</p>
              <p>${listing.cost}</p>
            </div>)}
          </div>
      </div>
    )
  }
  
  export default PlantViewListings