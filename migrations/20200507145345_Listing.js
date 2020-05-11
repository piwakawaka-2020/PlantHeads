exports.up = function(knex) {
    return knex.schema.createTable('listing', (table) => {
        table.integer('id').primary()
        table.integer('plants_id')
        table.integer('users_id')
        table.string('scientific_name')
        table.string('common_name')
        table.integer('cost')
        table.string('type')
        table.string('care_tips')
        table.string('photoFile')      
    })
  }
  
  exports.down = function(knex) {
    return knex.schema.dropTable('listing')
  }