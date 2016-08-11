import { IweatherHourly } from './iweather-hourly';
import { Scale } from '../../shared/scale.enum';

export class WeatherHourly implements IweatherHourly {
    epoch: Date;
    temperature: number;
    scale: Scale;
    humidity: string;
    description: string;
    precipPercent: string;
}
