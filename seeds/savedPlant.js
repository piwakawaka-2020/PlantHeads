
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('saved_plant').del()
    .then(function () {
      // Inserts seed entries
      return knex('saved_plant').insert([
        {users_id: 1, scientific_name: 'Microchloa', plants_id: 156234, photoURL: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Starr_010324-9001_Ehrharta_erecta.jpg', common_name: 'smallgrass'},
        {users_id: 1, scientific_name: 'Mikania Micrantha', plants_id: 156400, photoURL: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Mikania_micrantha_at_Kadavoor.jpg', common_name: 'mile a minute'},
        {users_id: 1, scientific_name: 'Monarda stanfieldii', plants_id: 157400, photoURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Monarda_%27Panorama%27_02.JPG/640px-Monarda_%27Panorama%27_02.JPG', common_name: 'Stanfields beebalm'},
        {users_id: 1, scientific_name: 'Carex viridula', plants_id: 117145, photoURL: 'images/placeholder.jpg', common_name: 'little green sedge'},
        {users_id: 1, scientific_name: 'Lespedeza hirta', plants_id: 149293, photoURL: 'images/placeholder.jpg', common_name: 'hairy lespedeza'},
        {users_id: 1, scientific_name: 'Lotus wrightii', plants_id: 151915, photoURL: 'images/placeholder.jpg', common_name: "Wright's deervetch"},
        {users_id: 1, scientific_name: 'Poa trivialis', plants_id: 168794, photoURL: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Poa_trivialis_Ruwbeembgras_bloeiwijze.jpg', common_name: 'rough bluegrass'},
        {users_id: 1, scientific_name: 'Purshia glandulosa', plants_id: 172542, photoURL: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Purshia_glandulosa_5.jpg', common_name: 'desert bitterbrush'},
        {users_id: 1, scientific_name: 'Salix arbusculoides', plants_id: 177479, photoURL: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Salix_arbusculoides_range_map_2.png', common_name: 'littletree willow'},
        {users_id: 1, scientific_name: 'Spartina spartinae', plants_id: 183241, photoURL: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Spartina_spartinae_line.jpg', common_name: 'gulf cordgrass'},
        {users_id: 1, scientific_name: 'Vicia grandiflora', plants_id: 191811, photoURL: 'images/placeholder.jpg', common_name: 'large yellow vetch'},
        {users_id: 1, scientific_name: 'Viola sororia', plants_id: 192350, photoURL: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Viola_sororia_%22Freckles%22_2010.jpg', common_name: 'common blue violet'}
      ]);
    });
};