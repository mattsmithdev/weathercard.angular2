import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SettingsService } from './settings.service';
import { Settings } from './settings';
import { ScaleNames } from '../shared/scale.enum';
import { WeatherProvider } from '../shared/weather-provider.enum';
import { EnumKeysPipe } from './enum-transform.pipe';
import { WeatherService } from '../weather/weather.service';

@Component({
  moduleId: module.id,
  selector: 'app-settings',
  templateUrl: 'settings.component.html',
  styleUrls: ['settings.component.css'],
  pipes: [EnumKeysPipe]
})
export class SettingsComponent implements OnInit {
  settings: Settings;
  submitted: boolean = false;
  optionsScale: string;
  optionsProvider: string;

  scales = ScaleNames;
  providers = WeatherProvider;

  constructor(private _settingsService: SettingsService, private _weatherService: WeatherService) {}

  ngOnInit(): void {
    this._settingsService.settings$.subscribe(
      settings => this.settings = settings);
    console.log(JSON.stringify(this.settings));
  }

  onSubmit(form: any): void {
    // console.log('you submitted value:', form);
    // console.log('scale=', ScaleNames[parseInt(form.scale, 10)]);
    // console.log('WeatherProvider=', WeatherProvider[parseInt(form.weatherProvider, 10)]);
    // console.log(JSON.stringify(this.settings));
    this._weatherService.getWeather();
  }
}
