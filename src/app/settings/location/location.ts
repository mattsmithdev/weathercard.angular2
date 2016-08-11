import { Ilocation } from './ilocation';

export class Location implements Ilocation {
    Display: string;
    country: string;
    state: string;
    city: string;
    lat: string;
    lon: string;

    constructor() {
        this.Display = '';
        this.country = '';
        this.state = '';
        this.city = '';
        this.lat = '';
        this.lon = '';
    }
}
