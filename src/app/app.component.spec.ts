/* tslint:disable:no-unused-variable */

import { addProviders } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SettingsService } from './settings/settings.service';
import { WeatherService } from './weather/weather.service';
import { LocationService } from './settings/location/location.service';
import { Http, HTTP_PROVIDERS, ConnectionBackend } from '@angular/http';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject,
  TestComponentBuilder
} from '@angular/core/testing';

describe('App: WeatherCard', () => {
  let http;
  let httpProviders;
  let connectionBackend;
  let testComponentBuilder;
  let settingsService;
  let locationService;
  let weatherService;

  beforeEachProviders(() => [
    HTTP_PROVIDERS,
    ConnectionBackend,
    Http,
    SettingsService, LocationService, WeatherService
  ]);

  beforeEach(inject([TestComponentBuilder, HTTP_PROVIDERS, ConnectionBackend,
    Http, SettingsService, LocationService, WeatherService], (tcb, hp, cb, h, ss, ls, ws) => {
      testComponentBuilder = tcb;
      httpProviders = hp;
      connectionBackend = cb;
      http = h;
      settingsService = ss;
      locationService = ls;
      weatherService = ws;
    }));

  it('should create an instance', () => {
    let component = new AppComponent(settingsService, locationService, weatherService);
    expect(component).toBeTruthy();
  });

});
