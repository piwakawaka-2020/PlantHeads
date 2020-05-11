import React from 'react'
import { getListings } from '../apis/listings'
import {Link} from 'react-router-dom'

class ListingView extends React.Component {
    state = {
        listings: [],
    }

    componentDidMount() {
        getListings()
        .then(listings => {
            this.setState({
                listings: listings
            })
        })
    }

    render() {
        const listings = this.state.listings
        return (
            <>
            <div className='listingViewHeader'>
                <h2>Adopt A New Best Friend</h2>
            </div>
            <div className='listingViewContainer'>
            {console.log(listings)}
            {listings.map(listing => 
                <div className='singleListingView'>
                    <img className='listingPic' src="/images/placeholder.jpg" alt="photo of tree"/>
                    <p className='listingInfo'>Botanical Name: {listing.scientific_name}</p>
                    <p className='listingInfo'>Common Name: {listing.notes}</p>
                    <p className='listingInfo'>${listing.cost}</p>  
                </div>)}
            </div>
            <div className='linkToCreateListing'>
                <h2 className='createListingHeader'>To Give A Plant To Another Loving Family</h2>
                <Link to='listings'><button id='save'>Create Listing</button></Link>
            </div>
            </>
            
        )
    }   
}

export default ListingView