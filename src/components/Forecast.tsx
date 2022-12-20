import React from 'react';
import { ForecastProps } from '../interfaces/ForecastProps';
import { BiWind, BiCompass, BiCalendar } from 'react-icons/bi'

const Forecast: React.FC<ForecastProps> = ({ forecast }) => {
  const weeklyForecast = forecast.filter(period => period.number % 2 == 0);

  return (
    <section className='forecast-list'>
      <ul>
        {weeklyForecast.map((period) => (
          <li key={period.number}>
            <span className="name">
              <BiCalendar /> {period.name}
            </span> 
            <div className="temperature">
              <span className='degrees'>
                {period.temperature}
                <small>{period.temperatureUnit}</small>
              </span>
              <span className="short-description">
                {period.shortForecast}
              </span>
            </div>
            <div className="footer-area">
              <span>
                <BiWind /> {period.windSpeed}
                <br />
                <BiCompass /> {period.windDirection}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
    
  );
};

export default Forecast;