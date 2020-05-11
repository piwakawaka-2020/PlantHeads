import request from 'superagent'

export function savePlant(plant) {
    return request
        .post('/api/savedPlants/')
        .send(plant)
        .then(res => res.body)
}

export function getAllSavedPlants() {
    return request.get(`/api/savedPlants/`)
        .then(res => res.body)
} 

//someone wrote this I already had one in plants called getAllSavedPlants > Alice