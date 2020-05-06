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
          username: 'Josh01',
          cost: 39.99,
          notes: 'commonly known as Devils Ivy'
        },
        {
          id: 2, 
          plants_id: 196798,
          scientific_name:'Adhatoda tristis',
          username: 'patricia02',
          cost: 58.45,
          notes: 'also known as Justicia Tristis'
        },
        {
          id: 3, 
          plants_id: 134794,
          scientific_name:'Eriophorum komarovii',
          username: 'Thomas03',
          cost: 68.78,
          notes: 'also known as Eriophorum Angustifolium Komarovii'
        }
      ])
    })
}
