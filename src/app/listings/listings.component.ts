import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { searchListings } from '../graphql';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {
  listings: any[] = [];
  loading = true;
  constructor(private router: Router,private apollo: Apollo) { }

  getHotels(): Observable<any> {
    return this.apollo.watchQuery<any>({
      query:searchListings,
    }).valueChanges;
  }

  ngOnInit(): void {

    this.getHotels().subscribe((data) => {
      this.listings = data.data.getHotel;
      console.log(this.listings)
      console.log(data)
    })
  }
}
