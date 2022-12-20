import axios from 'axios';

const WEATHER_API_URL = 'https://api.weather.gov/points';

export async function getForecastURL(lat: number, lng: number) {
  const response = await axios.get(`${WEATHER_API_URL}/${lat},${lng}`)
    .then((res) => {
      return res.data.properties.forecast
    })
    .catch((err) => {
      return err
    });
  
  return response
}

export async function getForecastWeekly(url: string) {
  const response = await axios.get(url)
    .then((res) => {
      return res
    }).catch((err) => {
      return err
    })

  return response
}

export async function getForecast(lat: number, lng: number) {
  
  const forecastURLResponse = await getForecastURL(lat, lng)
  
  if(!forecastURLResponse) return

  const forecastWeeklyResponse = await getForecastWeekly(forecastURLResponse)
  
  return forecastWeeklyResponse;
}