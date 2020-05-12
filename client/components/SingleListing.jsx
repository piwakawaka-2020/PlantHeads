import React from 'react'
import { getListings } from '../apis/listings'
import { getPlant } from '../apis/plants'
import {Link} from 'react-router-dom'


//open site search plant  click on palnt view listings bottom right
//click listing
//or go through NAV
//or buy sell page go through there
//make API for single listing get listing by id - gets listing from db feeds into component

//add contact user
//user email
//type of listing 
//care tips of listing
//Q reducer .... not to have information repeating?

//Edgars from/listing click on card go to single listing
//connect cards to component

        //   id: 1,              * purpose of this is what? 
        //   plants_id: 132811,  * use with api > read more about this species
        //   users_id: 3,        * need to retrieve user information
        //   scientific_name:'Pothos aurea',  *shown
        //   common_name: 'Devils Ivy', * display
        //   cost: 39.99,               * display
        //   type: 'cutting',           * display 'of propagation
        //   care_tips: 'indoors, can tolerate low-light, soil have to dry out beore watering',
        //   photoFile: 



class SingleListing extends React.Component {
    state = {
        listings: [],    
    }

    componentDidMount() {
        getSingleListing(id) //pass id in 
        .then( singleListing => {
            this.setState({
                singlelisting: singlelisting
            })
        })
    }

    render() {
        const listings = this.state.singlelisting
        return (
            <>
            <div className='listingViewHeader'>
                <h2>House Plants For Sale</h2>
            </div>
            <div className='listingViewContainer'>
             {this.singlelisting(listing => 
                <div className='singleListingView'>
                    <img className='listingPic' src="/images/placeholder.jpg" alt="photo of tree"/>
                    <p className='listingInfo'>Botanical Name: {listing.scientific_name}</p>
                    <p className='listingInfo'>Common Name: {listing.notes}</p>
                    <p className='listingInfo'>${listing.cost}</p>  
                </div>)} 
            </div>
            <div className='linkToCreateListing'>
                <h2 className='createListingHeader'>To Give A Plant To Another Loving Family</h2>
                <Link to='/createListing'><button id='save'>Create Listing</button></Link>
            </div>
            </>
            
        )
    }   
}

export default SingleListing
