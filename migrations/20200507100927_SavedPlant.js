
exports.up = function(knex) {
  return knex.schema.createTable('saved_plant', table => {
    table.increments('id').primary()
    table.integer('user_id')
    table.string('scientific_name')
    table.integer('plants_id')
    table.string('photoURL')
    table.string('notes')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('savedPlant')
};
