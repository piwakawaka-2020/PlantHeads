import request from 'superagent'

const baseUrl = '/api/users'

export function getUser(userId) {
    return request
        .get(baseUrl + '/' + userId)
        .then(res => res.body)
}