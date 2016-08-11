import { IweatherCurrent } from './weather-current/iweather-current';
import { IweatherDay } from './weather-day/iweather-day';

export interface Iweather {
    weatherCurrent: IweatherCurrent;
    weatherDays: IweatherDay[];
}
