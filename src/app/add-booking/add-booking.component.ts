import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { ADD_BOOKING } from '../graphql';

@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.css']
})
export class AddBookingComponent implements OnInit {
  booking_id = 0;
  booking_date = "";
  booking_start = "";
  booking_end = "";
  username = "";

  query: any;


  constructor(private router: Router, private apollo: Apollo) { }

  ngOnInit(): void {
  }

  onSubmit(addBookingForm: NgForm): void {
    this.booking_id = addBookingForm.value.booking_id;
    this.booking_date = addBookingForm.value.booking_date;
    this.booking_start = addBookingForm.value.booking_start;
    this.booking_end = addBookingForm.value.booking_end;
    this.username = addBookingForm.value.username

    this.query = this.apollo
    .mutate({
    mutation: ADD_BOOKING,
    variables: {
    booking_id: this.booking_id,
    booking_date: this.booking_date,
    booking_start: this.booking_start,
    booking_end: this.booking_end,
    username: this.username
  }
}).subscribe( (data) => {
    console.log(data);
  })

  this.router.navigate(['/login'])

  }
}
