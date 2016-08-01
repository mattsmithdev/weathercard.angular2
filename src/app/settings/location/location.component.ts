import { Component, OnInit } from '@angular/core';
import {CompleterCmp, CompleterService, CompleterData, COMPLETER_DATA_PROVIDERS, CompleterItem} from 'ng2-completer';

@Component({
  moduleId: module.id,
  selector: 'app-location',
  templateUrl: 'location.component.html',
  styleUrls: ['location.component.css'],
  directives: [CompleterCmp],
  providers: [COMPLETER_DATA_PROVIDERS, CompleterService]
})
export class LocationComponent implements OnInit {

  private searchStr: string = 'Kennett Square, PA';
  locationSelected: string;
  private dataService: CompleterData;
  private searchData = [
    { location: 'Kennett Square, PA', value: 'Kennett Square, PA' },
    { location: 'Downingtown, PA', value: 'Downingtown, PA' },
    { location: 'San Francisco, CA', value: 'San Francisco, CA' }
  ];

  constructor(private completerService: CompleterService) {
    this.dataService = completerService.local(this.searchData, 'location', 'location');
    // this.dataService = completerService.remote('http://autocomplete.wunderground.com/aq?query=', 'RESULTS', 'name');
  }

   public onLocationSelected(selected: CompleterItem) {
        this.locationSelected = selected.title;
        console.log('this.locationSelected=' + this.locationSelected);
    }

  ngOnInit() {
  }

}
