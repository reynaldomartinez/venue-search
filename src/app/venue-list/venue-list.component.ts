import { Component, OnInit } from '@angular/core';
import {VenueService} from '../services/venue.service';

@Component({
  selector: 'app-venue-list',
  templateUrl: './venue-list.component.html',
  styleUrls: ['./venue-list.component.css']
})
export class VenueListComponent implements OnInit {
  location = {};
  constructor(private venueService: VenueService) { }

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.location = position.coords;
        // let x = position.coords;
        console.log(this.location);
        this.venueService.getVenues(this.location).subscribe( data => console.log(data));
      });
    }
  }
}
