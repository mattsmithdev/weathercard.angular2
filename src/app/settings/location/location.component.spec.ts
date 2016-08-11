/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders } from '@angular/core/testing';
import { LocationComponent } from './location.component';
import {LocalData, RemoteData, CompleterCmp, CompleterService, CompleterData, COMPLETER_DATA_PROVIDERS, CompleterItem} from 'ng2-completer';
import { LocationService } from './location.service';
import { CurrentLocationService } from './current-location.service';
import { Location } from './location';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject,
  TestComponentBuilder
} from '@angular/core/testing';


describe('Component: Location', () => {
  let completerService;
  let locationService;
  let currentLocationService;
  let location;
  let testComponentBuilder;
  let localData;
  let remoteData;

  beforeEachProviders(() => [
    CompleterService, LocalData, RemoteData, LocationService, CurrentLocationService, Location
  ]);

  beforeEach(inject([TestComponentBuilder, CompleterService, LocalData,
  RemoteData, LocationService, CurrentLocationService, Location], (tcb, cs, ld, rd, ls, cls, l) => {
    testComponentBuilder = tcb;
    completerService = cs;
    localData = ld;
    remoteData = rd;
    locationService = ls;
    currentLocationService = cls;
    location = l;
  }));

  it('should create an instance', () => {
    let component = new LocationComponent(completerService, locationService, location, currentLocationService);
    expect(component).toBeTruthy();
  });
});
