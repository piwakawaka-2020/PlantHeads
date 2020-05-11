import request from 'superagent'

const baseUrl = '/api/listings'

export function getListingsByPlant(plantsId) {
    return request
        .get(baseUrl + '/plants/' + plantsId)
        .then(res => res.body)
}


export function getListings() {
    return request
    .get(baseUrl)
    .then(res => res.body)
}

export function createListing(newListing) {
    return request
        .post(baseUrl)
        .send(newListing)
        .then(res => res.body)
}