/* tslint:disable:no-unused-variable */

import { addProviders } from '@angular/core/testing';
import { SettingsService } from './settings.service';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject,
  TestComponentBuilder
} from '@angular/core/testing';

describe('Service: Settings', () => {
  beforeEach(() => {
    addProviders([SettingsService]);
  });

  it('should ...',
    inject([SettingsService],
      (service: SettingsService) => {
        expect(service).toBeTruthy();
      }));
});
