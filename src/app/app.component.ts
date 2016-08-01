import { Component, OnInit } from '@angular/core';
import { SettingsService } from './settings/settings.service';
import { WeatherService } from './weather/weather.service';
import { WeatherCurrentComponent } from './weather/weather-current/weather-current.component';
import { WeatherDayComponent } from './weather/weather-day/weather-day.component';
import { SettingsComponent } from './settings/settings.component';
import { LocationComponent } from './settings/location/location.component';
import { Settings } from './settings/settings';

declare var jQuery: any;

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [SettingsService, WeatherService, Settings],
  directives: [WeatherCurrentComponent, WeatherDayComponent, SettingsComponent, LocationComponent]
})
export class AppComponent implements OnInit {

  constructor(private _settingsService: SettingsService, private _weatherService: WeatherService) {}

  ngOnInit(): void {
    jQuery.material.init();
  }
}
