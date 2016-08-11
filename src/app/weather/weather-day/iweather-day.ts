import { Scale } from '../../shared/scale.enum';
import { IweatherHourly } from './iweather-hourly';

export interface IweatherDay {
    epoch: Date;
    dayNumber: number;
    dayName: string;
    weatherIconName: string;
    temperature: number;
    scale: Scale;
    weatherHourly: IweatherHourly[];
}
