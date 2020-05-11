import request from 'superagent'

const baseUrl = '/api/listings' //is this needed because the listing takes care of this?

export function singleListing(plantsId) {
    return request
    .get(baseUrl + '/plants/' + plantsId)
    .then(res => res.body)
}  

//GET LISTING IS in listing api so not needed here...???