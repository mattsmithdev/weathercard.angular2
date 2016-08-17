import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Ilocation } from './ilocation';

@Injectable()
export class LocationService {

  private _locationUrl = 'http://localhost/api/locations';

  constructor(private _http: Http) { }

  getLocation() {
    return this._http.get(this._locationUrl)
      .retryWhen(error => error.delay(15000))
      .retry(3)
      .timeout(30000, new Error('getLocation delay exceeded'))
      .map((response: Response) => <Ilocation>response.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(JSON.stringify(error) || 'Server error');
  }
}
