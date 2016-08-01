import { Scale } from '../../shared/scale.enum';

export class WeatherCurrent {
    temperature: number;
    weatherIcon: string;
    description: string;
    scale: Scale;
    currentTime: Date;
    humidity: number;
    dewPoint: number;
    wind: string;
    precip: number;
}
