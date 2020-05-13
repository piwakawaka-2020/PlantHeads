exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('listing').del()
    .then(function () {
      // Inserts seed entries
      return knex('listing').insert([
        {
          plants_id: 132811,
          users_id: 1,
          scientific_name:'Pothos aurea',
          common_name: 'Devils Ivy',
          cost: 39.99,
          type: 'cutting',
          care_tips: 'indoors, can tolerate low-light, soil have to dry out beore watering',
          photoFile: 'https://trademe.tmcdn.co.nz/photoserver/plusw/1305538704.jpg'
        },
        { 
          plants_id: 220010,
          users_id: 1,
          scientific_name:'Anthurium Crystallinum',
          common_name: 'Crystal Anthurium',
          cost: 98.45,
          type: 'seedling',
          care_tips: 'soil must be moist but well drained, can grow indoors, require bright filtered light ',
          photoFile: 'https://trademe.tmcdn.co.nz/photoserver/plusw/1318017998.jpg'
        },
        { 
          plants_id: 134794,
          users_id: 1,
          scientific_name:'Eriophorum komarovii',
          common_name: 'Cottongrass',
          cost: 68.78,
          type: 'full plant',
          care_tips: 'sow outside, full sunlight, grows in moist soil, propagate in spring',
          photoFile: 'data:image/jpeg;base64,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'
        },
        { 
          plants_id: 157554,
          users_id: 1,
          scientific_name:'Monstera Deliciosa',
          common_name: 'Tarovine',
          cost: 86,
          type: 'Full Plant',
          care_tips: 'soil must be moist but well drained, can grow indoors, require bright filtered light ',
          photoFile: 'https://i0.wp.com/vervemagazine.co.nz/wp-content/uploads/2019/02/monedit.jpg?resize=1000%2C667'
        },
        { 
          plants_id: 223713,
          users_id: 1,
          scientific_name:'Zamioculcas zamiifolia',
          common_name: 'Zanzibar Gem',
          cost: 44.25,
          type: 'Full Plant',
          care_tips: 'soil must be moist but well drained, can grow indoors, require bright filtered light ',
          photoFile: 'https://media.bunnings.co.nz/Product-384x384/01dba519-b646-462b-984d-039435b0c6f3.png'
        },
        { 
          plants_id: 130299,
          users_id: 1,
          scientific_name:'Dracaena Trifasciata',
          common_name: 'Snake Plant',
          cost: 98.45,
          type: 'seedling',
          care_tips: 'soil must be moist but well drained, can grow indoors, require bright filtered light ',
          photoFile: 'https://assets.mitre10.co.nz/sys-master/productimages/hcf/h3b/9396132904990/351200xlg.jpg'
        },
        { 
          plants_id: 157552,
          users_id: 1,
          scientific_name:'Monstera adansonii',
          common_name: 'Monkey Mask Monstera',
          cost: 56.45,
          type: 'Full Plant',
          care_tips: 'soil must be moist but well drained, can grow indoors, require bright filtered light ',
          photoFile: 'https://cdn.shopify.com/s/files/1/0151/1650/1046/products/Monstera_monkey_mask_indoor_pot_plant_new_Zealand_2400x.jpg?v=1573164164'
        },
        { 
          plants_id: 219553,
          users_id: 1,
          scientific_name:'Aglaonema',
          common_name: 'Chinese Evergreen',
          cost: 48.45,
          type: 'Full Plant',
          care_tips: 'soil must be moist but well drained, can grow indoors, require bright filtered light ',
          photoFile: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1557258847-chinese-evergreen-houseplant-1557258690.jpg?crop=0.883xw:0.887xh;0.0849xw,0.0821xh&resize=480:*'
        },
        { 
          plants_id: 220010,
          users_id: 1,
          scientific_name:'Plumeria obtusifolia',
          common_name: 'Graveyard Flower',
          cost: 98.45,
          type: 'seedling',
          care_tips: 'soil must be moist but well drained, can grow indoors, require bright filtered light ',
          photoFile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSbgKlPadEAWuZcBHyd6fCjgzOqSuGEGXCCVyRi8YSHwNfkD1U8&usqp=CAU'
        },
        { 
          plants_id: 220310,
          users_id: 1,
          scientific_name:'Anthurium Warocqueanum',
          common_name: 'Queen Anthurium',
          cost: 200.00,
          type: 'Full Plant',
          care_tips: 'soil must be moist but well drained, can grow indoors, require bright filtered light ',
          photoFile: 'https://cdn.shopify.com/s/files/1/0281/8139/7640/products/image_5759c9d9-8778-4e3e-bd48-958f14059f14_1024x1024@2x.jpg?v=1582723821'
        },
        { 
          plants_id: 257357,
          users_id: 1,
          scientific_name:'Senecio Rowleyanus',
          common_name: 'common blue violet',
          cost: 30,
          type: 'Full Plant',
          care_tips: 'soil must be dry but well drained, can grow indoors, require bright filtered light ',
          photoFile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSodx1Yi2_N4FCVSL4zBsW1jvX9A-HlccCoMzIWkEpbcveaEBuK&usqp=CAU'
        },
        { 
          plants_id: 137132,
          users_id: 1,
          scientific_name:'Ficus Lyrata',
          common_name: 'Fiddle Leaf Fig',
          cost: 130,
          type: 'Full Plant',
          care_tips: 'soil must be moist but well drained, can grow indoors, require bright filtered light ',
          photoFile: 'https://www.plantandpot.nz/wp-content/uploads/2016/03/Fiddle-Leaf-Fig-e1471826884271.jpg'
        },
      ])
    })
}
