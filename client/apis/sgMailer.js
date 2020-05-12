import request from 'superagent'

const mailerUrl = '/api/sgEmailer/'

export function sgEmailer(email) {
    return request
        .post(mailerUrl)
        .send(email)
        .then(res => res.body)
}