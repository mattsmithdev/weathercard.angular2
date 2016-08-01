/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { WeatherDayComponent } from './weather-day.component';
import { WeatherService } from '../weather.service';
import { SettingsService } from '../../settings/settings.service';
import { Weather } from '../weather';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

describe('Component: WeatherDay', () => {
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
    let component = new WeatherDayComponent(weatherService, settingsService);
    expect(component).toBeTruthy();
  });
});
