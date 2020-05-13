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
            console.log(singleListing)
            this.setState({
                singlelisting: singlelisting
            })
        })
    }

    render() {
        
        return (
            <>
            <div className='page-boarder'>
            <div className='single-list-container'>
                    <div className='single-list-border'>
                        <div className='header-container'>
                            <h2 className='heading-single-listing'>House Plants For Sale</h2>
                        </div>
                        <div className='background-image'>

                        
                        
                        <img className='single-list-box' src={this.state.singlelisting.photoFile} alt="image of plant"/>
                       
                        

                        <div className='single-plant-listing'>
                                <p className='listingInfo'>Botanical Name: {this.state.singlelisting.scientific_name}</p>
                                <p className='listingInfo'>Common Name: {this.state.singlelisting.common_name}</p>
                                <p className='listingInfo'>Plant Type: {this.state.singlelisting.type}</p> 
                                <p className='listingInfo'>Care Tips: {this.state.singlelisting.care_tips}</p> 
                                <p className='listingInfo'>Cost: ${this.state.singlelisting.cost}</p> 
                            <div className='linkToContactSeller'>
                                <h2 className='contactSellerStyle'>Buy This Plant ~ Contact The Seller</h2>
                                <Link to='/emailForm/1'><button id='save'>Contact Seller</button></Link> 
                            </div>
                          </div>    
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
