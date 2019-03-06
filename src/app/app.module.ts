import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { VenueListComponent } from './venue-list/venue-list.component';
import { HomeComponent } from './home/home.component';
import { DropdownListComponent } from './partials/dropdown-list/dropdown-list.component';


@NgModule({
  declarations: [
    AppComponent,
    VenueListComponent,
    HomeComponent,
    DropdownListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
