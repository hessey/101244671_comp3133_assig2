import { gql } from 'apollo-angular'

export const searchListings = gql`
query getListing {
  getListing{
    listing_id
    listing_title
    description
    street
    city
    postal_code
    price
    email
    username
  }
}`;

export const searchBooking = gql`
query getBooking {
  getBooking{
    hotel_id
    booking_date
    booking_start
    booking_end
    user_id
    }
  }`;


export const ADD_USER = gql`
mutation addUser($user_id: Float!, $username: String!, $password: String!, $email: String!) {
  addUser(user_id: $user_id, username: $username, password: $password, email: $email) {
  user_id
  username
  }
}`;

export const ADD_LISTING = gql`
mutation addListing($listing_id: String!,
  $listing_title: String!, $description: String!,
   $street: String!, $city: String!, $postal_code: String!,
   $price: Number!, $email: String!, $username: String!) {
  addBooking(listing_id: $listing_id,
    listing_title: $listing_title,
    description: $description,
    street: $street,
    city: $city,
    postal_code: $postal_code,
    price: $price,
    email: $email,
    username: $username) {
      username
      listing_id
    }
  }
`;

export const ADD_BOOKING = gql`
mutation addBooking($booking_id: String!,
  $booking_date: String!, $booking_start: String!,
   $booking_end: String!, $username: String!) {
  addBooking(booking_id: $booking_id,
    booking_date: $booking_date,
    booking_start: $booking_start,
    booking_end: $booking_end,
    username: $username) {
      username
      booking_id
    }
  }
`;

export const LOGIN = gql`
mutation login($username: String!
            $password: String!){
              login(username: $username
              password: $password)
            }
`
  
  