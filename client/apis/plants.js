import request from 'superagent'

export function searchPlants(query) {
    return request.get(`/api/plants/search/${query}`)
        .then(res => res.body)
}

export function getPlant(id) {
    return request.get(`/api/plants/${id}`)
        .then(res => res.body)
}

export function getAllSavedPlants() {
    return request.get(`/api/plants`)
        .then(res => res.body)
}