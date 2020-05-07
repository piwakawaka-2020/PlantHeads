exports.up = function(knex) {
    return knex.schema.createTable('listing', (table) => {
        table.integer('id').primary()
        table.integer('plants_id')
        table.string('scientific_name')
        table.integer('user_id')
        table.integer('cost')
        table.string('notes')
    })
  }
  
  exports.down = function(knex) {
    return knex.schema.dropTable('listing')
  }