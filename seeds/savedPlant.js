
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('saved_plant').del()
    .then(function () {
      // Inserts seed entries
      return knex('saved_plant').insert([
        {id: 1, users_id: 3, scientific_name: 'Microchloa', plants_id: 156234, photoURL: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Starr_010324-9001_Ehrharta_erecta.jpg', notes: 'also known as smallgrass'},
        {id: 2, users_id: 2, scientific_name: 'Mikania Micrantha', plants_id: 156400, photoURL: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Mikania_micrantha_at_Kadavoor.jpg', notes: 'also known as mile a minute'},
        {id: 3, users_id: 1, scientific_name: 'Monarda stanfieldii', plants_id: 157400, photoURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Monarda_%27Panorama%27_02.JPG/640px-Monarda_%27Panorama%27_02.JPG', notes: 'also known as Stanfields beebalm'}
      ]);
    });
};