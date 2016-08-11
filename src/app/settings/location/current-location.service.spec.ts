/* tslint:disable:no-unused-variable */

import { addProviders } from '@angular/core/testing';
import { CurrentLocationService } from './current-location.service';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
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
