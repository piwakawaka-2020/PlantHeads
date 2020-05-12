import request from 'superagent'
import { isAuthenticated, removeUser } from '../utils/auth'
import { get } from '../utils/localstorage'


export function savePlant(plant) {
    const token = get('token')
    const headers = { Accept: 'application/json' }

    if (isAuthenticated()) {
        headers['Authorization'] = `Bearer ${token}`
    }

    return request
        .post('/api/savedPlants/')
        .set(headers)
        .send(plant)
        .then(res => res.body)
}

export function getAllSavedPlants(userId) {
    const token = get('token')
    const headers = { Accept: 'application/json' }

    if (isAuthenticated()) {
        headers['Authorization'] = `Bearer ${token}`
    }

    return request
        .get(`/api/savedPlants/${userId}`)
        .set(headers)
        .then(res => res.body)
}

//someone wrote this I already had one in plants called getAllSavedPlants > Alice
