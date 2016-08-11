import { Scale } from '../../shared/scale.enum';

export interface IweatherCurrent {
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
