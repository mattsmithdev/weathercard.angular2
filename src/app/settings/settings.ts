import { Scale } from '../shared/scale.enum';
import { WeatherProvider } from '../shared/weather-provider.enum';

export class Settings {
    scale: Scale = Scale.F;
    weatherProvider: WeatherProvider = WeatherProvider.WeatherUnderground;
}
