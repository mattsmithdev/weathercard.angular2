import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, BehaviorSubject } from 'rxjs/Rx';
import { Settings } from '../settings/settings';
import { Iweather } from './iweather';
import { Weather } from './weather';
import { WeatherProvider } from '../shared/weather-provider.enum';
import { Location } from '../settings/location/location';
import { Ilocation } from '../settings/location/ilocation';

@Injectable()
export class WeatherService {

  private _locationUrl = 'http://localhost/api/locations';
  private _weatherUrl = 'http://localhost/api/weather/';
  private _dataObs = new BehaviorSubject<Iweather>(new Weather());
  private _location: Location;
  private _weatherProvider: string;
  private getLatestWeatherSub;

  constructor(private _settings: Settings, private _http: Http) { }

  getLatestWeather(location: Location, settings: Settings) {

    if ((this._location) && (this._location.lat === location.lat) && (this._location.lon === location.lon)
      && (this._weatherProvider === WeatherProvider[settings.weatherProvider])) {
      return this._dataObs;
    }

    if (this.getLatestWeatherSub) {
      this.getLatestWeatherSub.unsubscribe();
    }

    this.getLatestWeatherSub = Observable.timer(0, 60000).switchMap(
      () => this._http.get(this._weatherUrl + WeatherProvider[settings.weatherProvider] + '?city=' +
        location.city + '&state=' + location.state + '&country=' + location.country +
        '&lat=' + location.lat + '&lon=' + location.lon)
        .retryWhen(error => error.delay(30000))
        .retry(3)
        .timeout(45000, new Error('delay exceeded'))
        .map((response: Response) => <Iweather>response.json())
        .do(data => {
          if ((data.weatherCurrent === null) || (data.weatherDays === null)) {
            Observable.throw(new Error('Problem with the data. Please try again later.'));
          }
        })
        .catch(this.handleError)
    ).subscribe(
      requestData => {
        this._dataObs.next(requestData);
      },
      error => {
        this.handleError(error);
      }
      );

    this._weatherProvider = WeatherProvider[settings.weatherProvider];
    this._location = location;
    return this._dataObs;
  }

  getWeather() {
    let locationResponse: Ilocation;
    return this._http.get(this._locationUrl)
      .retryWhen(error => error.delay(15000))
      .retry(3)
      .timeout(30000, new Error('location delay exceeded'))
      .map((response: Response) => {
        locationResponse = <Ilocation>response.json();
        if (locationResponse) {
          return locationResponse;
        } else {
          return new Location();
        }
      }).flatMap((location) => this._http.get(this._weatherUrl + WeatherProvider[this._settings.weatherProvider] + '?city=' +
        location.city + '&state=' + location.state + '&country=' + location.country +
        '&lat=' + location.lat + '&lon=' + location.lon)
        .retryWhen(error => error.delay(15000))
        .retry(3)
        .timeout(30000, new Error('weather delay exceeded'))
        .map((response: Response) => <Iweather>response.json())
        .do(data => {
          if ((data.weatherCurrent === null) || (data.weatherDays === null)) {
            Observable.throw(new Error('Problem with the data. Please try again later.'));
          }
        })
        .catch(this.handleError)
      );
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(JSON.stringify(error) || 'Server error');
  }
}
