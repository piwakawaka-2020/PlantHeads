import request from 'superagent'
import { isAuthenticated, removeUser } from '../utils/auth'
import { get } from '../utils/localstorage'


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
    const token = get('token')
    const headers = { Accept: 'application/json' }

    if (isAuthenticated()) {
        headers['Authorization'] = `Bearer ${token}`
    }

    return request
        .post(baseUrl)
        .set(headers)
        .send(newListing)
        .then(res => res.body)
}