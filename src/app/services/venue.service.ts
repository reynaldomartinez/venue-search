import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VenueService {
  CLIENT_ID = 'CXIHIW45YIDTVE15PCTW2GKN0EFHFT0G0PZTUIUPHDYG540T';
  CLIENT_SECRET = 'DEDVTRN5ASXKVYDQDXIT0BV33H3Q5G2GZRDHAGMHKXIUP3H1';
  constructor(private http: HttpClient) { }
  getVenues(location) {
    // console.log(location);
    // const latAndLong = `${lat},${long}`;
    // coordinates.forEach((i) => alert(i.latitude) );
    // console.log(lat );
    return this.http.get(`https://api.foursquare.com/v2/venues/explore?client_id=${this.CLIENT_ID}&client_secret=${this.CLIENT_SECRET}&v=20180323&limit=5&ll=${location.latitude},${location.longitude}&query=coffee`);
  }
}
