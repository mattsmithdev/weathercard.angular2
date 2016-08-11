import { Scale } from '../shared/scale.enum';
import { WeatherProvider } from '../shared/weather-provider.enum';

export interface Isettings {
    scale: Scale;
    weatherProvider: WeatherProvider;
}
