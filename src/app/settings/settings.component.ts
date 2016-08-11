import { Component, OnInit } from '@angular/core';
import { SettingsService } from './settings.service';
import { Settings } from './settings';
import { ScaleNames } from '../shared/scale.enum';
import { WeatherProvider } from '../shared/weather-provider.enum';
import { EnumKeysPipe } from './enum-transform.pipe';

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

  constructor(private _settingsService: SettingsService) {}

  ngOnInit(): void {
    this._settingsService.settings$.subscribe(
      settings => this.settings = settings);
  }

  onSubmit() {
    this._settingsService.setSettings(this.settings);
  }
}
