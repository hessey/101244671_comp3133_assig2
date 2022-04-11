import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookingComponent } from './add-booking/add-booking.component';
import { AddListingComponent } from './add-listing/add-listing.component';
import { BookingsComponent } from './bookings/bookings.component';
import { ListingsComponent } from './listings/listings.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'bookings', component: BookingsComponent},
  { path: 'add-booking', component: AddBookingComponent},
  { path: 'listings', component: ListingsComponent},
  { path: 'add-listings', component: AddListingComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
