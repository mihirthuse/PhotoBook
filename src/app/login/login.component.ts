import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string;
  password: string;
  errorMsg: string;

  constructor(private authService: AuthenticationService, private router: Router) { }

  signIn() {
    console.log("Hello here! Signed IN!");
    console.log("Email :: "+this.email);
    console.log("Password :: " +this.password);
    this.authService.login({ email: this.email, password: this.password })
      .then(resolve => this.router.navigate(['gallery']))
      .catch(function(error) {
        console.log("Error here :: " +error);
    });
  }

}
