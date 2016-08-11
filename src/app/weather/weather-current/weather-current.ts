import { IweatherCurrent } from './iweather-current';
import { Scale } from '../../shared/scale.enum';

export class WeatherCurrent implements IweatherCurrent {
    temperature: number;
    weatherIcon: string;
    description: string;
    scale: Scale;
    epoch: Date;
    humidity: string;
    dewPoint: number;
    wind: string;
    precipPercent: string;
}
