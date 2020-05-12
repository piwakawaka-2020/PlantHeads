import request from 'superagent'

const baseUrl = '/api/listings/' 

export function singleListing(listingId) {
    return request
    .get(baseUrl + listingId)
    .then(res => res.body)
}  

