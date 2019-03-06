import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dropdown-list',
  templateUrl: './dropdown-list.component.html',
  styleUrls: ['./dropdown-list.component.css']
})
export class DropdownListComponent implements OnInit {
  @Input() venueInfo;
  constructor() { }
  ngOnInit() {
  }

}
