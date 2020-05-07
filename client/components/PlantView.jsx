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
    const rosemary = getPlant()
    const listings = getListingsByPlant()
    const uppercaseTitle = rosemary.common_name.charAt(0).toUpperCase() + rosemary.common_name.slice(1);
    return (
        <div id='mainContainer'>
            <div id='leftSide' style={{backgroundImage: `url(${rosemary.images[0].url})`}}>
                <h2 className='plantHeading'>"{uppercaseTitle}"</h2>
                <h3 className='plantHeading'>{rosemary.scientific_name}</h3>
                <h3 className='plantHeading'>{rosemary.family_common_name}</h3>
            </div>
            <Height growth={rosemary.main_species.specifications.growth_rate} height={rosemary.main_species.specifications.mature_height.cm.toFixed(1)} />
            <div id='rightSide'>
                <div id='properties'>
                    <PhMeter min={rosemary.main_species.growth.ph_minimum} max={rosemary.main_species.growth.ph_maximum} />
                    <Temperature temp={rosemary.main_species.growth.temperature_minimum.deg_c} />
                    <Water water={rosemary.main_species.growth.moisture_use} />
                    <Toxicity toxicity={rosemary.main_species.specifications.toxicity} />
                    <DroughtTolerance drought={rosemary.main_species.growth.drought_tolerance} />
                    <Lifespan lifespan={rosemary.main_species.specifications.lifespan} />
                </div>
                <Seasons />
                <PlantViewListings listings={listings} />
            </div>
        </div>
  )
}

export default PlantView