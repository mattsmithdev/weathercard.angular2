/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { WeatherDayComponent } from './weather-day.component';
import { WeatherService } from '../weather.service';
import { SettingsService } from '../../settings/settings.service';
import { CurrentLocationService } from '../../settings/location/current-location.service';
import { Weather } from '../weather';
import { Http, HTTP_PROVIDERS, ConnectionBackend, BrowserXhr } from '@angular/http';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject,
  TestComponentBuilder
} from '@angular/core/testing';

describe('Component: WeatherDay', () => {
  let http;
  let httpProviders;
  let connectionBackend;
  let testComponentBuilder;
  let weatherService;
  let settingsService;
  let currentLocationService;
  let location;

  beforeEachProviders(() => [
    HTTP_PROVIDERS,
    ConnectionBackend,
    Http,
    WeatherService, SettingsService, CurrentLocationService, Location
  ]);

  beforeEach(inject([TestComponentBuilder, HTTP_PROVIDERS, ConnectionBackend,
    Http, WeatherService, SettingsService, CurrentLocationService, Location], (tcb, hp, cb, h, ws, ss, cls, l) => {
      testComponentBuilder = tcb;
      httpProviders = hp;
      connectionBackend = cb;
      http = h;
      weatherService = ws;
      settingsService = ss;
      currentLocationService = cls;
      location = l;
    }));

  it('should create an instance', () => {
    let component = new WeatherDayComponent(weatherService, settingsService, currentLocationService, location);
    expect(component).toBeTruthy();
  });
});
