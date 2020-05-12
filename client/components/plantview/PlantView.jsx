import React from 'react'
import { connect } from 'react-redux'

import {getPlant} from '../../apis/plants'
import {getListingsByPlant} from '../../apis/listings'
import {savePlant} from '../../apis/savedPlants'
import {Link} from 'react-router-dom'

import PhMeter from './PhMeter'
import Temperature from './Temperature'
import Water from './Water'
import Toxicity from './Toxicity'
import DroughtTolerance from './DroughtTolerance'
import Lifespan from './Lifespan'
import Seasons from './Seasons'
import PlantViewListings from './PlantViewListings'
import Height from './Height'

class PlantView extends React.Component {
    state = {
        plant: {},
        listings: {}
    }

    componentDidMount() {
        getPlant(Number(this.props.match.params.plantId)).then(plant => {
            this.setState({
                plant: plant
            })
        })
        getListingsByPlant(this.props.match.params.plantId).then(listings => {
            this.setState({
                listings: listings
            })
        })
    }

    saveCurrentPlant = () => {
        const plant = this.state.plant
        savePlant({
            users_id: 1, // placeholder
            scientific_name: plant.scientific_name,
            plants_id: plant.id,
            photoURL: plant.images.length > 0 ? plant.images[0].url : 'images/placeholder.jpg',
            common_name: plant.common_name
        })
    }

    render() {
    const plant = this.state.plant
    const listings = this.state.listings
    return this.state.plant.id ? (
        <div id='mainContainer'>
            <div id='leftSide' style={plant.images[0] && {backgroundImage: `url(${plant.images[0].url})`}}>
                <div>
                <h2 className='plantHeading'>"{plant.common_name ? plant.common_name.charAt(0).toUpperCase() + plant.common_name.slice(1) : plant.scientific_name}"</h2>
                {plant.common_name ? <h3 className='plantHeading'>{plant.scientific_name}</h3> : <></>}
                {plant.family_common_name ? <h3 className='plantHeading'>{plant.family_common_name}</h3> : <></>}
                </div>
            </div>
            <div id='middle'>
            <Height growth={plant.main_species.specifications.growth_rate ? plant.main_species.specifications.growth_rate : '-'} height={plant.main_species.specifications.mature_height.cm ? plant.main_species.specifications.mature_height.cm.toFixed(1) : '-'} />
            </div>
            <div id='rightSide'>
                <div id='properties'>
                    <PhMeter min={plant.main_species.growth.ph_minimum} max={plant.main_species.growth.ph_maximum} />
                    <Temperature temp={plant.main_species.growth.temperature_minimum.deg_c ? plant.main_species.growth.temperature_minimum.deg_c.toFixed(1) : '-'} />
                    <Water water={plant.main_species.growth.moisture_use} />
                    <Toxicity toxicity={plant.main_species.specifications.toxicity} />
                    <DroughtTolerance drought={plant.main_species.growth.drought_tolerance} />
                    <Lifespan lifespan={plant.main_species.specifications.lifespan} />
                </div>
                <Seasons growthPeriod={plant.main_species.specifications.growth_period} />
                <div id='bottomRight'>
                    {this.props.auth.isAuthenticated ? <div id='buttons'>
                        <button id='save' onClick={this.saveCurrentPlant}>Save to favourites</button>
                        <Link to='/createListing'><button id='save'>Create Listing</button></Link>
                    </div> : <></>}
                    <PlantViewListings listings={listings} />
                </div>
                
            </div>
        </div>
        ) : <img className='oddishLoading' src='images/oddish.gif' />
    }
}

const mapStateToProps = (state) => {
    return {
      auth: state.auth
    }
}

export default connect(mapStateToProps)(PlantView)