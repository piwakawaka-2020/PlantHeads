import request from 'superagent'

export function savePlant(plant) {
    return request
        .post('/api/savedPlants/')
        .send(plant)
        .then(res => res.body)
}

export function getAllSavedPlants(userId) {
    return request.get(`/api/savedPlants/${userId}`)
        .then(res => res.body)
} 

//someone wrote this I already had one in plants called getAllSavedPlants > Alice
