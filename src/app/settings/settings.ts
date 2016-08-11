import { Isettings } from './isettings.ts';
import { Scale } from '../shared/scale.enum';
import { WeatherProvider } from '../shared/weather-provider.enum';
import { Ilocation } from './location/ilocation';

export class Settings implements Isettings {
    scale: Scale = Scale.F;
    weatherProvider: WeatherProvider = WeatherProvider.WeatherUnderground;
    location: Ilocation;
}
