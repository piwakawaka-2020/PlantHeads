import React from 'react'
import { getListings } from '../apis/listings'
import { getPlant } from '../apis/plants'
import {Link} from 'react-router-dom'
import { singleListing } from '../apis/singleListing'


class SingleListing extends React.Component {
    state = {
          singlelisting: '',
    }

    componentDidMount() {
        const id = this.props.match.params.listingId
        singleListing(id) 
        .then( singlelisting => {
            this.setState({
                singlelisting: singlelisting
            })
        })
    }

    render() {
        
        return (
            <>
            <div className='listingViewHeader'>
                <h2>House Plants For Sale</h2>
            </div>
             <div className='listingViewContainer'>
                <div className='singleListingView'>
                    <img className='listingPic' src="/images/placeholder.jpg" alt="photo of tree"/>
                    <p className='listingInfo'>Botanical Name: {this.state.singlelisting.scientific_name}</p>
                    <p className='listingInfo'>Common Name: {this.state.singlelisting.notes}</p>
                    <p className='listingInfo'>${this.state.singlelisting.cost}</p>  
                </div> 
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
