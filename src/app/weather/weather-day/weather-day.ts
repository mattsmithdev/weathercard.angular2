import { Scale } from '../../shared/scale.enum';
import { WeatherHourly } from './weather-hourly';

export class WeatherDay {
    day: Date;
    dayNumber: number;
    dayName: string;
    weatherIconName: string;
    temperature: number;
    scale: Scale;
    weatherHourly: WeatherHourly[];
}
