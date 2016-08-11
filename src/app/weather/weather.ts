import { Iweather } from './iweather';
import { IweatherCurrent } from './weather-current/iweather-current';
import { WeatherCurrent } from './weather-current/weather-current';
import { IweatherDay } from './weather-day/iweather-day';

export class Weather implements Iweather {

    weatherCurrent: IweatherCurrent;
    weatherDays: IweatherDay[];

    constructor() {
        this.weatherCurrent = new WeatherCurrent();
        this.weatherDays = [];
    }

}
