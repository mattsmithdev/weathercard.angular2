import { Component, OnInit } from '@angular/core';
import {CompleterCmp, CompleterService, RemoteData, COMPLETER_DATA_PROVIDERS, CompleterItem} from 'ng2-completer';
import { LocationService } from './location.service';
import { CurrentLocationService } from './current-location.service';
import { Location } from './location';
import { TrimPipe } from './trim.pipe';

@Component({
  moduleId: module.id,
  selector: 'app-location',
  templateUrl: 'location.component.html',
  styleUrls: ['location.component.css'],
  directives: [CompleterCmp],
  providers: [COMPLETER_DATA_PROVIDERS, CompleterService],
  pipes: [TrimPipe]
})
export class LocationComponent implements OnInit {

  private _locationsUrl = 'http://localhost/api/locations/';
  private searchString: string = '';
  locationSelected: string;
  errorMessage: string;
  private dataService: RemoteData;

  constructor(private _completerService: CompleterService, private _locationService: LocationService, private _location: Location,
    private _currentLocationService: CurrentLocationService) {
    this.dataService = _completerService.remote(this._locationsUrl, 'Display', 'Display');
    this.dataService.urlFormater(term => {
            return  this._locationsUrl + encodeURIComponent(term.trim());
        });
  }

  public onLocationSelected(selected: CompleterItem) {
    this.locationSelected = selected.title;
    this._location = selected.originalObject;
    this._currentLocationService.setLocation(this._location);
  }

  ngOnInit() {
    this._locationService.getLocation()
      .subscribe(
      location => {
        this._location = location;
        this.searchString = location.Display;
        this._currentLocationService.setLocation(this._location);
      },
      error => this.errorMessage = <any>error);

  }

}
