exports.up = function(knex) {
    return knex.schema.createTable('listing', (table) => {
        table.increments('id').primary()
        table.integer('plants_id')
        table.integer('users_id')
        table.string('scientific_name')
        table.string('common_name')
        table.decimal('cost')
        table.string('type')
        table.string('care_tips')
        table.text('photoFile')      
    })
  }
  
  exports.down = function(knex) {
    return knex.schema.dropTable('listing')
  }