
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('saved_plant').del()
    .then(function () {
      // Inserts seed entries
      return knex('saved_plant').insert([
        {users_id: 3, scientific_name: 'Microchloa', plants_id: 156234, photoURL: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Starr_010324-9001_Ehrharta_erecta.jpg', common_name: 'smallgrass'},
        {users_id: 2, scientific_name: 'Mikania Micrantha', plants_id: 156400, photoURL: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Mikania_micrantha_at_Kadavoor.jpg', common_name: 'mile a minute'},
        {users_id: 1, scientific_name: 'Carex viridula', plants_id: 117145, photoURL: 'https://www.almanac.com/sites/default/files/image_nodes/sunflower-1627193_1920.jpg', common_name: 'little green sedge'},
        {users_id: 1, scientific_name: 'Lespedeza hirta', plants_id: 149293, photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQUb6_gn2IkfPiMVZ2Ck2zhPPEQi_UPaz-vaii0l5p983GdDFL9&usqp=CAU', common_name: 'hairy lespedeza'},
        {users_id: 1, scientific_name: 'Lotus wrightii', plants_id: 151915, photoURL: 'https://thisnzlife.co.nz/wp-content/uploads/2018/06/dreamstime_s_53750107.jpg', common_name: "Wright's deervetch"},
        {users_id: 1, scientific_name: 'Poa trivialis', plants_id: 168794, photoURL: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Poa_trivialis_Ruwbeembgras_bloeiwijze.jpg', common_name: 'rough bluegrass'},
        {users_id: 1, scientific_name: 'Purshia glandulosa', plants_id: 172542, photoURL: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Purshia_glandulosa_5.jpg', common_name: 'desert bitterbrush'},
        {users_id: 1, scientific_name: 'Salix arbusculoides', plants_id: 177479, photoURL: 'https://thisnzlife.co.nz/wp-content/uploads/2018/04/dreamstime_s_107576369.jpg', common_name: 'littletree willow'},
        {users_id: 1, scientific_name: 'Spartina spartinae', plants_id: 183241, photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQi8pSWkeZsRuRa_qTTwPZ-l7bVj13BBLQLsmN0QlfW4wheBdo6&usqp=CAU', common_name: 'gulf cordgrass'},
        {users_id: 1, scientific_name: 'Vicia grandiflora', plants_id: 191811, photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTe_y2G7JHC46JrdH7MmGnhyftJ2DxVidIsNXN_vcKQeYu827rG&usqp=CAU', common_name: 'large yellow vetch'},
        {users_id: 1, scientific_name: 'Viola sororia', plants_id: 192350, photoURL: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Viola_sororia_%22Freckles%22_2010.jpg', common_name: 'common blue violet'},
        {users_id: 1, scientific_name: 'Monarda stanfieldii', plants_id: 157400, photoURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Monarda_%27Panorama%27_02.JPG/640px-Monarda_%27Panorama%27_02.JPG', common_name: 'Stanfields beebalm'},
      ]);
    });
};