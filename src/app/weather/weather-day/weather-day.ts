import { IweatherDay } from './iweather-day';
import { Scale } from '../../shared/scale.enum';
import { WeatherHourly } from './weather-hourly';

export class WeatherDay implements IweatherDay {
    epoch: Date;
    dayNumber: number;
    dayName: string;
    weatherIconName: string;
    temperature: number;
    scale: Scale;
    weatherHourly: WeatherHourly[];
}
