/* tslint:disable:no-unused-variable */

import { CurrentLocationService } from './current-location.service';

import {
  addProviders,
  async, inject,
  TestComponentBuilder
} from '@angular/core/testing';

describe('Service: CurrentLocation', () => {
  beforeEach(() => {
    addProviders([CurrentLocationService]);
  });

  it('should ...',
    inject([CurrentLocationService],
      (service: CurrentLocationService) => {
        expect(service).toBeTruthy();
      }));
});
