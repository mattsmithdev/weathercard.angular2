import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }   from './app.component';
import { CompleterCmp } from 'ng2-completer';
import { WeatherCurrentComponent } from './weather/weather-current/weather-current.component';
import { WeatherDayComponent } from './weather/weather-day/weather-day.component';
import { SettingsComponent } from './settings/settings.component';
import { LocationComponent } from './settings/location/location.component';

import { CurrentLocationService } from './settings/location/current-location.service';
import { Location } from './settings/location/location';
import { Settings } from './settings/settings';
import { SettingsService } from './settings/settings.service';
import { WeatherService } from './weather/weather.service';
import { LocationService } from './settings/location/location.service';

@NgModule({
    declarations: [AppComponent, CompleterCmp,
        SettingsComponent, LocationComponent, WeatherCurrentComponent,
        WeatherDayComponent],
    imports: [BrowserModule, FormsModule, HttpModule],
    providers: [SettingsService, LocationService, Settings, Location,
        WeatherService, CurrentLocationService],
    bootstrap: [AppComponent]
})
export class AppModule { }
