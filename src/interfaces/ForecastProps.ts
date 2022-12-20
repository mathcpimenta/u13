export interface ForecastProps {
    forecast: {
        number: number;
        isDaytime: boolean;
        shortForecast: string;
        name: string;
        startTime: string;
        endTime: string;
        temperature: number;
        temperatureUnit: string;
        icon: string;
        isDayTime: boolean;
        temperatureTrend?: string | null;
        windSpeed: string;
        windDirection: string;
        detailedForecast: string;
    }[]
}
    