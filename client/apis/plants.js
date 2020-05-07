import request from 'superagent'

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
    }
]

export function searchPlants(query) {
    // return request.get(`/api/plants/search/${query}`)
    //     .then(res => res.body)
    return results
}