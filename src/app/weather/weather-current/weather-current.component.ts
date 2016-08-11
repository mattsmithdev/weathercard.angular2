import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Weather } from '../weather';
import { Iweather } from '../iweather';
import { SettingsService } from '../../settings/settings.service';
import { Settings } from '../../settings/settings';
import { Location } from '../../settings/location/location';
import { CurrentLocationService } from '../../settings/location/current-location.service';
import { ScalePipe } from '../scale.pipe';
import { FromUnixPipe, TimeAgoPipe } from 'angular2-moment';
import { Scale } from '../../shared/scale.enum';

@Component({
  moduleId: module.id,
  selector: 'app-weather-current',
  templateUrl: 'weather-current.component.html',
  styleUrls: ['weather-current.component.css'],
  pipes: [ScalePipe, FromUnixPipe, TimeAgoPipe]
})
export class WeatherCurrentComponent implements OnInit {
  weather: Iweather = new Weather();
  settings: Settings;
  errorMessage: string;
  scale: Scale;

  constructor(private _weatherService: WeatherService, private _settingsService: SettingsService,
    private _currentLocationService: CurrentLocationService, private _location: Location) { }

  ngOnInit(): void {
    this._settingsService.settings$.subscribe(
      settings => {
        this.settings = settings;

        this._weatherService.getLatestWeather(this._location, this.settings)
          .subscribe(
          weather => {
            this.weather = weather;
          },
          error => this.errorMessage = <any>error);
      });

    this._currentLocationService.location$.subscribe(
      location => {
        this._location = location;
        this._weatherService.getLatestWeather(this._location, this.settings)
          .subscribe(
          weather => {
            this.weather = weather;
          },
          error => this.errorMessage = <any>error);
      });

    this._weatherService.getWeather()
      .subscribe(
      weather => {
        this.weather = weather;
      },
      error => this.errorMessage = <any>error);
  }

  getScale(): string {
    return Scale[this.settings.scale];
  }
}
