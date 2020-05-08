exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('listing').del()
    .then(function () {
      // Inserts seed entries
      return knex('listing').insert([
        {
          id: 1, 
          plants_id: 132811,
          scientific_name:'Pothos aurea',
          users_id: 3,
          cost: 39.99,
          common_name: 'Devils Ivy'
        },
        {
          id: 2, 
          plants_id: 196798,
          scientific_name:'Adhatoda tristis',
          users_id: 1,
          cost: 58.45,
          common_name: 'Justicia Tristis'
        },
        {
          id: 3, 
          plants_id: 134794,
          scientific_name:'Eriophorum komarovii',
          users_id: 2,
          cost: 68.78,
          common_name: 'Eriophorum Angustifolium Komarovii'
        }
      ])
    })
}
