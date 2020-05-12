import React from 'react'
import { getListings } from '../apis/listings'
import { getPlant } from '../apis/plants'
import {Link} from 'react-router-dom'
import { singleListing } from '../apis/singleListing'
import { connect } from 'react-redux'


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
            <div className='single-list-container'>
                <div className='single-list-border'>
                
                        <div className='header-container'>
                            <h2 className='heading-single-listing'>House Plants For Sale</h2>
                        </div>
                        <div className='background-image'>
                        <div className='single-list-box'>
                                <img className='img-single-list' src={this.state.singlelisting.photoFile} alt="photo of tree"/>       
                        </div> 
                        <div className='single-plant-listing'>
                                <p className='listingInfo'>Botanical Name: {this.state.singlelisting.scientific_name}</p>n
                                <p className='listingInfo'>Notes: {this.state.singlelisting.notes}</p>
                                <p className='listingInfo'>Common Name: {this.state.singlelisting.common_name}</p>
                                <p className='listingInfo'>${this.state.singlelisting.cost}</p> 
                                <p className='listingInfo'>Care Tips: {this.state.singlelisting.care_tips}</p> 
                                <p className='listingInfo'>Plant Size: {this.state.singlelisting.type}</p> 
                                <p className='listingInfo'>{this.state.singlelisting.users_id}</p> 
                        </div>
                    <div className='linkToContactSeller'>
                        <h2 className='contactSellerStyle'>Buy This Plant ~ Contact Your Seller</h2>
                        <Link to='/emailForm'><button id='save'>Contact Seller </button></Link> 
                    </div>  
                    </div>
                </div>
            </div>
            </>
            
        )
    }   
}

const mapStateToProps = (state) => {
    return {
        ...state.auth.user
    }
}

export default connect(mapStateToProps) (SingleListing)
