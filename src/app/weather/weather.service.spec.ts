/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { WeatherService } from './weather.service';

describe('Service: Weather', () => {
  beforeEach(() => {
    addProviders([WeatherService]);
  });

  it('should ...',
    inject([WeatherService],
      (service: WeatherService) => {
        expect(service).toBeTruthy();
      }));
});
