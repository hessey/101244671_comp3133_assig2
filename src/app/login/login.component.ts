import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { LOGIN } from '../graphql';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading = false;
  error: string | undefined;
  User: any = {};
  password = "";
  username = "";
  query: any;

  constructor(private router: Router, private apollo: Apollo) { }

  ngOnInit(): void {
  }

  onSubmit(loginForm: NgForm): void {
    this.username = loginForm.value.username;
    this.password = loginForm.value.password;
    console.log(loginForm);
    localStorage.setItem('isValidUser', 'true');
    this.router.navigate(['/listings'])
    if(this.username != "" && this.password != "") {

      this.query = this.apollo
        .mutate({
        mutation: LOGIN,
        variables: {
        username: this.username,
        password: this.password
      }
      }).subscribe( (data) => {
        console.log(data)
        localStorage.setItem('isValidUser', 'true');
        this.router.navigate(['/listings'])
      })
    }
    else {
      localStorage.setItem('isValidUser', 'false');
      alert('username or password invalid')
    }
  }
}
