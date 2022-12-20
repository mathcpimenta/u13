import axios from 'axios';
import { getForecastURL } from "../../services/weather";

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
const WEATHER_API_URL = 'https://api.weather.gov/points';

describe('services/weather', () => {

  beforeEach(() => {
    mockedAxios.get.mockResolvedValue({
      data: {
        properties: {
          forecast: 'https://api.weather.gov/gridpoints/TOP/31,80/forecast'
        }
      }
    });
  });

  it('returns the forecast URL', () => {
    const lat = 39.7456;
    const lng = -97.0892;
    return getForecastURL(lat, lng).then(url => {
      expect(url).toBe('https://api.weather.gov/gridpoints/TOP/31,80/forecast');
      expect(mockedAxios.get).toHaveBeenCalledTimes(1);
      expect(mockedAxios.get).toHaveBeenCalledWith(`${WEATHER_API_URL}/${lat},${lng}`);
    });
  });

  it('returns the error when the request fails', () => {
    mockedAxios.get.mockRejectedValue(new Error('Request failed'));
    const lat = 39.7456;
    const lng = -97.0892;
    return getForecastURL(lat, lng).catch(error => {
      expect(error).toEqual(new Error('Request failed'));
    });
  });
  
});
