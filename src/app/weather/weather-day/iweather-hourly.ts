import { Scale } from '../../shared/scale.enum';

export interface IweatherHourly {
    epoch: Date;
    temperature: number;
    scale: Scale;
    humidity: string;
    description: string;
    precipPercent: string;
}
