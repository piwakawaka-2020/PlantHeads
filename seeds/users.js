const {generatePasswordHash} = require('../server/auth/hash')

exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('users').del()
      .then(function () {
        // Inserts seed entries
        return Promise.all([
            {id: 1, first_name: "Plantie", last_name:"the og plant", username:"admin", password:"abc123", email:"k.guan888@gmail.com"}
        ].map(user => {
            return generatePasswordHash(user.password)
              .then(hash => {
                user.hash = hash
                delete user.password
                return user
              })
          }))
          .then(users => {
            return knex('users').insert(users)
          })
      })
  }