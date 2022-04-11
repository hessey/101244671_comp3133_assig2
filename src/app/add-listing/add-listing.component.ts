import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { ADD_LISTING } from '../graphql';

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent implements OnInit {
  listing_id = "";
  listing_title = "";
  description = "";
  street = "";
  city = "";
  postal_code = "";
  price = 0;
  email = "";
  username = "";

  query: any;


  constructor(private router: Router, private apollo: Apollo) { }

  ngOnInit(): void {
  }

  onSubmit(addListingForm: NgForm): void {
    this.listing_id = addListingForm.value.listing_id;
    this.listing_title= addListingForm.value.listing_title;
    this.description = addListingForm.value.description;
    this.street = addListingForm.value.street;
    this.city = addListingForm.value.city;
    this.postal_code = addListingForm.value.postal_code;
    this.price = addListingForm.value.price;
    this.email = addListingForm.value.email;
    this.username = addListingForm.value.username;



    this.query = this.apollo
    .mutate({
    mutation: ADD_LISTING,
    variables: {
    hotel_id: this.listing_id,
    listing_title: this.listing_title,
    description: this.description,
    street: this.street,
    city: this.city,
    postal_code: this.postal_code,
    price: this.price,
    email: this.email,
    username: this.username,


}
})
.subscribe( (data) => {
console.log(data);
})

this.router.navigate(['/login'])

  }
}
