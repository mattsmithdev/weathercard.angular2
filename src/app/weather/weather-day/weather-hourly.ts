import { Scale } from '../../shared/scale.enum';

export class WeatherHourly {
    hour: Date;
    temperature: number;
    scale: Scale;
    humidity: number;
    description: string;
    precip: number;
}
