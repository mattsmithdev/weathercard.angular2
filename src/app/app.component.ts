import { Component, OnInit } from '@angular/core';
import { SettingsService } from './settings/settings.service';
import { WeatherService } from './weather/weather.service';
import { LocationService } from './settings/location/location.service';


declare var jQuery: any;

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private _settingsService: SettingsService,
              private _locationService: LocationService, private _weatherService: WeatherService) {}

  ngOnInit(): void {
    jQuery.material.init();
  }
}
