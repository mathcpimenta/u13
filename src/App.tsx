import { FormEvent, useState } from 'react';
import AddressForm from './components/AddressForm';
import Forecast from "./components/Forecast"
import { getLatLng } from './services/geocoding';
import { getForecast } from './services/weather';

function App() {
  const [error, setError] = useState<string>()
  const [forecastData, setForecastData] = useState()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const street = form.street.value;
    const city = form.city.value;
    const state = form.state.value;

    const latLng = await getLatLng({ street, city, state });

    if(latLng === "Insert a valid location") {
      setError(latLng);
      return
    }
    
    const forecast = await getForecast(latLng.y, latLng.x);
    
    setForecastData(forecast.data.properties.periods);
    setError(undefined);
    
  }

  return (
    <div className='container'>
      <header><h1>Forecast search</h1></header>
      <AddressForm handleSubmit={handleSubmit} />
      {error && <span className='error'>{error}</span>}
      {forecastData && <Forecast forecast={forecastData} />}
    </div>
    
  )
}

export default App
