/* tslint:disable:no-unused-variable */

import { addProviders } from '@angular/core/testing';
import { WeatherService } from './weather.service';
import { Weather } from './weather';
import { WeatherCurrent } from './weather-current/weather-current';
import { Settings } from '../settings/settings';
import { Observable, BehaviorSubject } from 'rxjs/Rx';
import { Http, HTTP_PROVIDERS, ConnectionBackend, BrowserXhr, XHRBackend,
  BaseRequestOptions, Response, ResponseOptions } from '@angular/http';
import {MockBackend} from '@angular/http/testing';
import {Injector, provide, } from '@angular/core';
import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject,
  TestComponentBuilder
} from '@angular/core/testing';

describe('Service: Weather', () => {
  let settings;
  let http;
  let httpProviders;
  let connectionBackend;
  let browserxhr;
  let xHRBackend;
  let weatherService;
  let mockbackend;

  beforeEachProviders(() => [
    HTTP_PROVIDERS,
    ConnectionBackend,
    BrowserXhr,
    XHRBackend,
    WeatherService, Settings, Http,
    BaseRequestOptions,
    MockBackend,
    provide(Http, {
      useFactory: (backend, options) => new Http(backend, options),
      deps: [MockBackend, BaseRequestOptions]})
  ]);

  beforeEach(inject([MockBackend, HTTP_PROVIDERS, ConnectionBackend, BrowserXhr, XHRBackend,
  Settings, WeatherService, Http], (mb, hp, cb, bx, xb, s, ws, h) => {
    mockbackend = mb;
    httpProviders = hp;
    connectionBackend = cb;
    browserxhr = bx;
    xHRBackend = xb;
    weatherService = ws;
    settings = s;
    http = h;
  }));


  it('should return weather', done => {
    let weather = new Weather();
    weather.weatherCurrent = new WeatherCurrent();
    weather.weatherCurrent.temperature = 90;

    let options = new ResponseOptions({
      body: JSON.stringify(weather)
    });
    mockbackend.connections.subscribe(connection => {
      connection.mockRespond(new Response(options));
    });

    weatherService.getWeather().subscribe(x => {
      expect(x).toContain('90');
      done();
    });
  });

});
