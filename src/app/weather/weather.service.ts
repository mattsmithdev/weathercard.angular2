import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Settings } from '../settings/settings';
import { Weather } from './weather';


@Injectable()
export class WeatherService {

  private _weatherUrl1 = 'weather.json';
  private _weatherUrl2 = 'weather2.json';

  constructor(private _settings: Settings, private _http: Http) { }

  getWeather(): Observable<Weather> {
    let weatherUrl = (this._settings.scale === 1) ? this._weatherUrl1 : this._weatherUrl2;
    return this._http.get(weatherUrl)
            .map((response: Response) => <Weather>response.json())
            .do(data => console.log('All:' + JSON.stringify(data)))
            .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
