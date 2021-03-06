import { Component, OnInit } from '@angular/core';
import { VenueService } from '../services/venue.service';

@Component({
  selector: 'app-venue-list',
  templateUrl: './venue-list.component.html',
  styleUrls: ['./venue-list.component.css']
})
export class VenueListComponent implements OnInit {
  location;
  venueDetails: any;
  error = false;
  constructor(private venueService: VenueService) { }

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
            this.location = position.coords;
          // let x = position.coords;
          // console.log(this.location);
            if (this.location) {
              this.getLocation();
            }
      });
    } else {
        this.error = true;
        console.log(this.error);
    }
  }
  getLocation() {
    this.venueService.getVenues(this.location).subscribe( (data) => {
      this.venueDetails = data.response.groups[0].items;
      console.log('data response: ', data.response);
      console.log('this.venueDetails', this.venueDetails);
      // this.venueDetails = [];
      // this.venueDetails = data.response.groups[0].items;
      //   console.log(this.venueDetails);
      console.log('data object ', data);
      // console.log(this.venueDetails);
    });
  }
}
