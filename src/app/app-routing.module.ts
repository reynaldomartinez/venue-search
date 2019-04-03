import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VenueListComponent } from './venue-list/venue-list.component';
import { HomeComponent } from './home/home.component';
import {TestiComponent} from './testi/testi.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'venues', component: VenueListComponent},
  { path: 'test', component: TestiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
