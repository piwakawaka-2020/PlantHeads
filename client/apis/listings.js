import request from 'superagent'

const listings = [
    {
        id: 1,
        plants_id: 69,
        scientific_name: 'crazy plant',
        username: 'planthead 420',
        cost: 20,
        notes: 'my favourite plant'
    },
    {
        id: 2,
        plants_id: 69,
        scientific_name: 'crazy plant',
        username: 'i love plants',
        cost: 20,
        notes: 'my favourite plant'
    },
    {
        id: 3,
        plants_id: 69,
        scientific_name: 'crazy plant',
        username: 'Ross Jourdain',
        cost: 20,
        notes: 'my favourite plant'
    }
]

export function getListingsByPlant(plant_id) {
    // return request.get(`/api/listings/${plant_id}`)
    //     .then(res => res.body)
    return listings
}

export function createListing(newListing) {
    //make an API for the createlisting component
    //need to call listing routes from the backend/server
    return newListing
}