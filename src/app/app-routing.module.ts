import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VenueListComponent } from './venue-list/venue-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'venues', component: VenueListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
