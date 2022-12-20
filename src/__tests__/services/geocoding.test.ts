import axios from 'axios';
import { getLatLng } from "../../services/geocoding";

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

interface GeocodingParams {
    street: string,
    city: string,
    state: string
}

describe('getLatLng', () => {
  it('should return the latitude and longitude for a valid address', async () => {
    const mockResponse = {
      data: {
        result: {
          addressMatches: [
            {
              coordinates: {
                latitude: 37.3382,
                longitude: -121.8863
              }
            }
          ]
        }
      }
    };
    mockedAxios.get.mockResolvedValue(mockResponse);

    const params: GeocodingParams = {
      street: '1 Main St',
      city: 'San Francisco',
      state: 'CA'
    };
    const result = await getLatLng(params);
    expect(result).toEqual({
      latitude: 37.3382,
      longitude: -121.8863
    });
  });

  it('should return undefined for an invalid address', async () => {
    const mockError = new Error('Insert a valid location');
    mockedAxios.get.mockRejectedValue(mockError);

    const params: GeocodingParams = {
      street: '',
      city: '',
      state: ''
    };
    const result = await getLatLng(params);
    expect(result).toEqual("Insert a valid location");
  });
});
