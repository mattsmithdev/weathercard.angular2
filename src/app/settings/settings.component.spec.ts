/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { SettingsComponent } from './settings.component';
import { SettingsService } from './settings.service';
import { Settings } from './settings';
import { WeatherService } from '../weather/weather.service';
import { Http, HTTP_PROVIDERS, ConnectionBackend, BrowserXhr } from '@angular/http';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject,
  TestComponentBuilder
} from '@angular/core/testing';

describe('Component: Settings', () => {
  let http;
  let httpProviders;
  let connectionBackend;
  let settingsService;
  let weatherService;
  let testComponentBuilder;
  let settings;

  beforeEachProviders(() => [
    HTTP_PROVIDERS,
    ConnectionBackend,
    Http,
    BrowserXhr,
    SettingsService, WeatherService, Settings
  ]);

  beforeEach(inject([TestComponentBuilder, HTTP_PROVIDERS, ConnectionBackend,
    Http, SettingsService, WeatherService, Settings], (tcb, hp, cb, h, ss, ws, s) => {
      testComponentBuilder = tcb;
      httpProviders = hp;
      connectionBackend = cb;
      http = h;
      weatherService = ws;
      settingsService = ss;
      settings = s;
    }));

  it('should create an instance', () => {
    let component = new SettingsComponent(settingsService);
    expect(component).toBeTruthy();
  });
});
