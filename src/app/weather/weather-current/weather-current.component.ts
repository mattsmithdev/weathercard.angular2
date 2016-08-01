import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Weather } from '../weather';
import { SettingsService } from '../../settings/settings.service';
import { Settings } from '../../settings/settings';
import { ScalePipe } from '../scale.pipe';
import { Scale } from '../../shared/scale.enum';

@Component({
  moduleId: module.id,
  selector: 'app-weather-current',
  templateUrl: 'weather-current.component.html',
  styleUrls: ['weather-current.component.css'],
  pipes: [ScalePipe]
})
export class WeatherCurrentComponent implements OnInit {
  weather: Weather = new Weather();
  settings: Settings;
  errorMessage: string;
  scale: Scale;

  constructor(private _weatherService: WeatherService, private _settingsService: SettingsService) { }

  ngOnInit(): void {
    this._weatherService.getWeather()
    .subscribe(
      weather => this.weather = weather,
      error => this.errorMessage = <any>error);
    this._settingsService.settings$.subscribe(
      settings => this.settings = settings);
  }

  getScale(): string {
    return Scale[this.settings.scale];
  }
}
