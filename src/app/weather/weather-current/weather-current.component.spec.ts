/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { WeatherCurrentComponent } from './weather-current.component';
import { WeatherService } from '../weather.service';
import { SettingsService } from '../../settings/settings.service';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

describe('Component: WeatherCurrent', () => {
  let weatherService;
  let settingsService;

  beforeEachProviders(() => [
    WeatherService, SettingsService
  ]);

  beforeEach(inject([WeatherService, SettingsService], (ws, ss) => {
    weatherService = ws;
    settingsService = ss;
  }));

  it('should create an instance', () => {
    let component = new WeatherCurrentComponent(weatherService, settingsService);
    expect(component).toBeTruthy();
  });
});
