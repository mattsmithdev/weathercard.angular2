import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Location } from './location';

@Injectable()
export class CurrentLocationService {

  private location = new BehaviorSubject<Location>(new Location());
  location$ = this.location.asObservable();

  constructor() {
  }

  setLocation(location: Location): void  {
    if (location.state === null) {
      location.state = '';
    }
    this.location.next(location);
  }

}
