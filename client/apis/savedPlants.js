import request from 'superagent'

export function savePlant(plant) {
    return request
        .post('/api/savedPlants/')
        .send(plant)
        .then(res => res.body)
}