import React from 'react'

import {getPlant} from '../apis/plants'
import {getListingsByPlant} from '../apis/listings'

import PhMeter from './PhMeter'
import Temperature from './Temperature'
import Water from './Water'
import Toxicity from './Toxicity'
import DroughtTolerance from './DroughtTolerance'
import Lifespan from './Lifespan'
import Seasons from './Seasons'
import PlantViewListings from './PlantViewListings'
import Height from './Height'

function PlantView() {
    const plant = getPlant()
    const listings = getListingsByPlant()
    const uppercaseTitle = plant.common_name.charAt(0).toUpperCase() + plant.common_name.slice(1);
    return (
        <div id='mainContainer'>
            <div id='leftSide' style={{backgroundImage: `url(${plant.images[0].url})`}}>
                <div>
                <h2 className='plantHeading'>"{uppercaseTitle}"</h2>
                <h3 className='plantHeading'>{plant.scientific_name}</h3>
                <h3 className='plantHeading'>{plant.family_common_name}</h3>
                </div>
                <button id='save'>Save to favourites</button>
            </div>
            <div id='middle'>
            <Height growth={plant.main_species.specifications.growth_rate} height={plant.main_species.specifications.mature_height.cm.toFixed(1)} />
            </div>
            <div id='rightSide'>
                <div id='properties'>
                    <PhMeter min={plant.main_species.growth.ph_minimum} max={plant.main_species.growth.ph_maximum} />
                    <Temperature temp={plant.main_species.growth.temperature_minimum.deg_c} />
                    <Water water={plant.main_species.growth.moisture_use} />
                    <Toxicity toxicity={plant.main_species.specifications.toxicity} />
                    <DroughtTolerance drought={plant.main_species.growth.drought_tolerance} />
                    <Lifespan lifespan={plant.main_species.specifications.lifespan} />
                </div>
                <Seasons />
                <PlantViewListings listings={listings} />
            </div>
        </div>
  )
}

export default PlantView