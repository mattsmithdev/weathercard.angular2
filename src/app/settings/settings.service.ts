import { Injectable } from '@angular/core';
import { Isettings } from './isettings';
import { Settings } from './settings';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SettingsService {

  private settings = new BehaviorSubject<Settings>(new Settings());
  settings$ = this.settings.asObservable();

  // settings: Settings;

  constructor() {
  }

  setSettings(settings: Settings): void  {
    this.settings.next(settings);
  }

/*
  public setSettings (settings: Settings): void {
    this.settings.scale = settings.scale;
    this.settings.weatherProvider = settings.weatherProvider;
    // TODO: Store settings in local storage
  }

  public getSettings (): Settings {
    // TODO: Read settings from local storage
    return this.settings;
  }
  */
}
