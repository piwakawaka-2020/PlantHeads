import React from 'react'

import Results from './Results'

const results = [
    {
        "common_name": "southern red oak",
        "complete_data": true,
        "id": 173194,
        "link": "http://trefle.io/api/plants/173194",
        "scientific_name": "Quercus falcata",
        "slug": "quercus-falcata"
    },
    {
        "common_name": "little green sedge",
        "complete_data": true,
        "id": 117145,
        "link": "http://trefle.io/api/plants/117145",
        "scientific_name": "Carex viridula",
        "slug": "carex-viridula"
    },
    {
        "common_name": "tietongue",
        "complete_data": true,
        "id": 122184,
        "link": "http://trefle.io/api/plants/122184",
        "scientific_name": "Coccoloba diversifolia",
        "slug": "coccoloba-diversifolia"
    },
    {
        "common_name": "hairy lespedeza",
        "complete_data": true,
        "id": 149293,
        "link": "http://trefle.io/api/plants/149293",
        "scientific_name": "Lespedeza hirta",
        "slug": "lespedeza-hirta"
    },
    {
        "common_name": "Wright's deervetch",
        "complete_data": true,
        "id": 151915,
        "link": "http://trefle.io/api/plants/151915",
        "scientific_name": "Lotus wrightii",
        "slug": "lotus-wrightii"
    },
    {
        "common_name": "rough bluegrass",
        "complete_data": true,
        "id": 168794,
        "link": "http://trefle.io/api/plants/168794",
        "scientific_name": "Poa trivialis",
        "slug": "poa-trivialis"
    },
    {
        "common_name": "desert bitterbrush",
        "complete_data": true,
        "id": 172542,
        "link": "http://trefle.io/api/plants/172542",
        "scientific_name": "Purshia glandulosa",
        "slug": "purshia-glandulosa"
    },
    {
        "common_name": "littletree willow",
        "complete_data": true,
        "id": 177479,
        "link": "http://trefle.io/api/plants/177479",
        "scientific_name": "Salix arbusculoides",
        "slug": "salix-arbusculoides"
    },
    {
        "common_name": "gulf cordgrass",
        "complete_data": true,
        "id": 183241,
        "link": "http://trefle.io/api/plants/183241",
        "scientific_name": "Spartina spartinae",
        "slug": "spartina-spartinae"
    },
    {
        "common_name": "large yellow vetch",
        "complete_data": true,
        "id": 191811,
        "link": "http://trefle.io/api/plants/191811",
        "scientific_name": "Vicia grandiflora",
        "slug": "vicia-grandiflora"
    },
    {
        "common_name": "common blue violet",
        "complete_data": true,
        "id": 192350,
        "link": "http://trefle.io/api/plants/192350",
        "scientific_name": "Viola sororia",
        "slug": "viola-sororia"
    },
    {
        "common_name": "mescal bean",
        "complete_data": true,
        "id": 183038,
        "link": "http://trefle.io/api/plants/183038",
        "scientific_name": "Sophora secundiflora",
        "slug": "sophora-secundiflora"
    },
    {
        "common_name": "tiplant",
        "complete_data": true,
        "id": 123107,
        "link": "http://trefle.io/api/plants/123107",
        "scientific_name": "Cordyline fruticosa",
        "slug": "cordyline-fruticosa"
    },
    {
        "common_name": "seagrape",
        "complete_data": true,
        "id": 122200,
        "link": "http://trefle.io/api/plants/122200",
        "scientific_name": "Coccoloba uvifera",
        "slug": "coccoloba-uvifera"
    },
    {
        "common_name": "nineleaf biscuitroot",
        "complete_data": true,
        "id": 151390,
        "link": "http://trefle.io/api/plants/151390",
        "scientific_name": "Lomatium triternatum",
        "slug": "lomatium-triternatum"
    },
    {
        "common_name": "marsh muhly",
        "complete_data": true,
        "id": 157820,
        "link": "http://trefle.io/api/plants/157820",
        "scientific_name": "Muhlenbergia racemosa",
        "slug": "muhlenbergia-racemosa"
    },
    {
        "common_name": "bulbous bluegrass",
        "complete_data": true,
        "id": 168590,
        "link": "http://trefle.io/api/plants/168590",
        "scientific_name": "Poa bulbosa",
        "slug": "poa-bulbosa"
    },
    {
        "common_name": "cluster rose",
        "complete_data": true,
        "id": 175820,
        "link": "http://trefle.io/api/plants/175820",
        "scientific_name": "Rosa pisocarpa",
        "slug": "rosa-pisocarpa"
    },
    {
        "common_name": "common periwinkle",
        "complete_data": true,
        "id": 192028,
        "link": "http://trefle.io/api/plants/192028",
        "scientific_name": "Vinca minor",
        "slug": "vinca-minor"
    },
    {
        "common_name": "poverty threeawn",
        "complete_data": true,
        "id": 107292,
        "link": "http://trefle.io/api/plants/107292",
        "scientific_name": "Aristida divaricata",
        "slug": "aristida-divaricata"
    },
    {
        "common_name": "flexible ceanothus",
        "complete_data": true,
        "id": 117997,
        "link": "http://trefle.io/api/plants/117997",
        "scientific_name": "Ceanothus ×flexilis",
        "slug": "ceanothus-×flexilis"
    },
    {
        "common_name": "showy forsythia",
        "complete_data": true,
        "id": 137564,
        "link": "http://trefle.io/api/plants/137564",
        "scientific_name": "Forsythia ×intermedia",
        "slug": "forsythia-×intermedia"
    },
    {
        "common_name": "Great Basin lupine",
        "complete_data": true,
        "id": 152063,
        "link": "http://trefle.io/api/plants/152063",
        "scientific_name": "Lupinus ×alpestris",
        "slug": "lupinus-×alpestris"
    },
    {
        "common_name": "Fraser's photinia",
        "complete_data": true,
        "id": 166070,
        "link": "http://trefle.io/api/plants/166070",
        "scientific_name": "Photinia ×fraseri",
        "slug": "photinia-×fraseri"
    },
    {
        "common_name": "hybrid yew",
        "complete_data": true,
        "id": 186515,
        "link": "http://trefle.io/api/plants/186515",
        "scientific_name": "Taxus ×media",
        "slug": "taxus-×media"
    },
    {
        "common_name": "Arnold hawthorn",
        "complete_data": true,
        "id": 123820,
        "link": "http://trefle.io/api/plants/123820",
        "scientific_name": "Crataegus ×anomala",
        "slug": "crataegus-×anomala"
    },
    {
        "common_name": "grapefruit",
        "complete_data": true,
        "id": 121062,
        "link": "http://trefle.io/api/plants/121062",
        "scientific_name": "Citrus ×paradisi",
        "slug": "citrus-×paradisi"
    },
    {
        "common_name": "Chinese magnolia",
        "complete_data": true,
        "id": 153938,
        "link": "http://trefle.io/api/plants/153938",
        "scientific_name": "Magnolia ×soulangiana",
        "slug": "magnolia-×soulangiana"
    },
    {
        "common_name": "Carolina poplar",
        "complete_data": true,
        "id": 170030,
        "link": "http://trefle.io/api/plants/170030",
        "scientific_name": "Populus ×canadensis",
        "slug": "populus-×canadensis"
    },
    {
        "common_name": "weeping willow",
        "complete_data": true,
        "id": 177444,
        "link": "http://trefle.io/api/plants/177444",
        "scientific_name": "Salix ×sepulcralis",
        "slug": "salix-×sepulcralis"
    }
]

function HomePage() {
  return (
    <>
    <div id='intro'>
        <h1 id='heading'>PlantHeads</h1>
        <h2>For people who have a plant for a head</h2>
        <input placeholder='Search for a plant!' id='search' />
    </div>
    <Results results={results} />
    </>
  )
}

export default HomePage