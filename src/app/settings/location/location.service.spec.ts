/* tslint:disable:no-unused-variable */

import { LocationService } from './location.service';
import { Http, HTTP_PROVIDERS, ConnectionBackend, BrowserXhr } from '@angular/http';

import {
  addProviders,
  async, inject,
  TestComponentBuilder
} from '@angular/core/testing';

describe('Service: Location', () => {
  let http;
  let locationService;
  let httpProviders;
  let connectionBackend;

  beforeEach(inject([HTTP_PROVIDERS, ConnectionBackend, LocationService, Http], (hp, cb, ls, h) => {
    httpProviders = hp;
    connectionBackend = cb;
    locationService = ls;
    http = h;
  }));

  it('should ...',
    inject([LocationService],
      (service: LocationService) => {
        expect(service).toBeTruthy();
      }));
});
