import request from 'superagent'

const baseUrl = '/api/listings'

//removed hardcode data to be able to linked to the server side
//PlantView component & will be affected by removing hardcoded data
//needs to adjust PVComponent to accept a promise
export function getListingsByPlant(plantsId) {
    return request
        .get(baseUrl + '/plants/' + plantsId)
        .then(res => res.body)
}

export function createListing(newListing) {
    return request
        .post(baseUrl)
        .send(newListing)
        .then(res => res.body)
}
