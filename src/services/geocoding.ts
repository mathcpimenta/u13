import axios from 'axios';

interface GeocodingParams {
    street: string,
    city: string,
    state: string
}

const GEOCODE_API_URL = "https://geocoding.geo.census.gov/geocoder/locations/address"

export async function getLatLng({ street, city, state }: GeocodingParams) {

    const response = await axios
        .get(GEOCODE_API_URL, {
            params: {
                street,
                city,
                state,
                benchmark: "Public_AR_Census2020",
                format: "json"
            }
        }).then((res) => {
            return res.data.result.addressMatches[0].coordinates
        }).catch((err) => {
            return "Insert a valid location"
        })
        
    return response
}