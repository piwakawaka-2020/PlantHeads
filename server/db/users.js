const connection = require('./connection')
const { generatePasswordHash } = require('../auth/hash')

module.exports = {
  createUser,
  getUser,
  getUserByUsername,
  userExists
}

function getUser(userID, db = connection) {
  return db('users').select().where('id', userID)
}

function userExists(user_name, db = connection) {
  return db('users')
    .where('username', user_name)
    .then(users => users.length > 0)
}

function getUserByUsername(user_name, db = connection) {
  return db('users')
    .where('username', user_name)
    .first()
}

function createUser({ username, first_name, last_name, password , email}, db = connection) {
  return generatePasswordHash(password)
    .then(hash => db('users').insert({ username, first_name, last_name, hash, email }))
}