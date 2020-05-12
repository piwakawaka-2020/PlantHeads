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
            <div className='single-list-border'>
                <div className='single-list-container'>
                        <div className='header-container'>
                            <h2 className='heading-single-listing'>House Plants For Sale</h2>
                        </div>
                        <div className='background-image'>
                        
                        
                        <img className='single-list-box' src={this.state.singlelisting.photoFile} alt="image of plant"/>
                       
                        
                        <div className='single-plant-listing'>
                                <p className='listingInfo'>Botanical Name: {this.state.singlelisting.scientific_name}</p>
                                <p className='listingInfo'>Common Name: {this.state.singlelisting.common_name}</p>
                                <p className='listingInfo'>${this.state.singlelisting.cost}</p> 
                                <p className='listingInfo'>Care Tips: {this.state.singlelisting.care_tips}</p> 
                                <p className='listingInfo'>Plant Size: {this.state.singlelisting.type}</p> 
                        </div>
                    {/* <div className='linkToCreateListing'>
                        <h2 className='createListingHeader'>Buy This Plant ~ Contact Your Seller</h2>
                        <Link to='/createListing'><button id='save'>Create Listing</button></Link> 
                    </div>  */}
                    </div>
                </div>
            </div>
            </>
            
        )
    }   
}

export default SingleListing
