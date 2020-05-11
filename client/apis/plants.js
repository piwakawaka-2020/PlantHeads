import request from 'superagent'

export function searchPlants(query, complete) {
    if (complete === true) {
        query += '&complete_data=true'
    }
    return request.get(`/api/plants/search/${query}`)
        .then(res => res.body)
}

export function getPlant(id) {
    return request.get(`/api/plants/${id}`)
        .then(res => res.body)
}