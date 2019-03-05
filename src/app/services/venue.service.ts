import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VenueService {

  constructor(private http: HttpClient) { }
  getVenues(location) {
    console.log(location);
    // const latAndLong = `${lat},${long}`;
    // coordinates.forEach((i) => alert(i.latitude) );
    // console.log(lat );
    return this.http.get(`https://api.foursquare.com/v2/venues/explore?client_id=${this.CLIENT_ID}&client_secret=${this.CLIENT_SECRET}&v=20180323&limit=5&ll=${location.latitude},${location.longitude}&query=coffee`);
  }
}
