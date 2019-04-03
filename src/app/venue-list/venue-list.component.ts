import { Component, OnInit } from '@angular/core';
import {VenueService} from '../services/venue.service';

@Component({
  selector: 'app-venue-list',
  templateUrl: './venue-list.component.html',
  styleUrls: ['./venue-list.component.css']
})
export class VenueListComponent implements OnInit {
  location = {};
  venueDetails: any;
  error = false;
  constructor(private venueService: VenueService) { }

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
            this.location = position.coords;
          // let x = position.coords;
          // console.log(this.location);
            this.venueService.getVenues(this.location).subscribe( data => {
          // @ts-ignore
            this.venueDetails = data.response.groups[0].items;
          // console.log(data);
          // console.log(this.venueDetails);
        });
      });
    } else {
        this.error = true;
    }
  }
}
