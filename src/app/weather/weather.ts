import { WeatherCurrent } from './weather-current/weather-current';
import { WeatherDay } from './weather-day/weather-day';

export class Weather {

    weatherCurrent: WeatherCurrent;
    weatherDays: WeatherDay[];

    constructor() {
        this.weatherCurrent = new WeatherCurrent();
        this.weatherDays = [];
    }


}
