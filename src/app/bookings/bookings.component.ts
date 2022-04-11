import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { searchBooking } from '../graphql';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  bookings: any[] = [];
  loading = true;

  constructor(private router: Router,private apollo: Apollo) { }

  getBooking(): Observable<any> {
    return this.apollo.watchQuery<any>({
      query:searchBooking,
    }).valueChanges;
  }

  ngOnInit(): void {

    this.getBooking().subscribe((data) => {
      this.bookings = data.data.getBooking;
      console.log(this.bookings)
      console.log(data)
    })
  }
}
