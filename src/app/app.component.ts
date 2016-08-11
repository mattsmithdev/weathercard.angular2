import { Component, OnInit } from '@angular/core';
import { SettingsService } from './settings/settings.service';
import { WeatherService } from './weather/weather.service';
import { LocationService } from './settings/location/location.service';
import { CurrentLocationService } from './settings/location/current-location.service';
import { WeatherCurrentComponent } from './weather/weather-current/weather-current.component';
import { WeatherDayComponent } from './weather/weather-day/weather-day.component';
import { SettingsComponent } from './settings/settings.component';
import { LocationComponent } from './settings/location/location.component';
import { Location } from './settings/location/location';
import { Settings } from './settings/settings';

declare var jQuery: any;

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [SettingsService, LocationService, Settings, Location, WeatherService, CurrentLocationService],
  directives: [SettingsComponent, LocationComponent, WeatherCurrentComponent, WeatherDayComponent]
})
export class AppComponent implements OnInit {

  constructor(private _settingsService: SettingsService,
              private _locationService: LocationService, private _weatherService: WeatherService) {}

  ngOnInit(): void {
    jQuery.material.init();
  }
}
