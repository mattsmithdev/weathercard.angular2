/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { WeatherCurrentComponent } from './weather-current.component';
import { WeatherService } from '../weather.service';
import { Weather} from '../weather';
import { WeatherCurrent } from './weather-current';
import { SettingsService } from '../../settings/settings.service';
import { Settings } from '../../settings/settings';
import { Location } from '../../settings/location/location';
import { CurrentLocationService } from '../../settings/location/current-location.service';
import { Http, HTTP_PROVIDERS, ConnectionBackend, BrowserXhr } from '@angular/http';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject,
  TestComponentBuilder
} from '@angular/core/testing';

describe('Component: WeatherCurrent', () => {
  let http;
  let httpProviders;
  let connectionBackend;
  let weatherService;
  let settingsService;
  let currentLocationService;
  let location;
  let testComponentBuilder;
  let weather;

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
    let component = new WeatherCurrentComponent(weatherService, settingsService, currentLocationService, location);
    expect(component).toBeTruthy();
  });

  it('should display the current temperature', () => {
    testComponentBuilder.createAsync(WeatherCurrentComponent).then(fixture => {
      let weatherCurrentComponent = fixture.componentInstance,
        element = fixture.nativeElement;
      weatherCurrentComponent.weather = new Weather();
      weatherCurrentComponent.weather.weatherCurrent = new WeatherCurrent();
      weatherCurrentComponent.weather.weatherCurrent.temperature = '90';

      fixture.detectChanges();
      expect(element.querySelector('.temp-large').innerText).toContain('90');
    });
  });

});
