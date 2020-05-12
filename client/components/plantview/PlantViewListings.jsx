import React from 'react'

import {Link} from 'react-router-dom'

function PlantViewListings(props) {
    return (
      <div id='plantViewListings'>
          <h3>Current Listings</h3>
          <div id='plantViewListingsContainer'>
            {props.listings.length === 0 ? 'No listings for this plant' : props.listings.map(listing => <Link to='/listings'><div key={listing.id} className='listing'>
              <p>{listing.username}</p>
              <p>${listing.cost}</p>
            </div></Link>)}
          </div>
      </div>
    )
  }
  
  export default PlantViewListings