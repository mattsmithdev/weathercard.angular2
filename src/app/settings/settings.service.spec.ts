/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { SettingsService } from './settings.service';

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
