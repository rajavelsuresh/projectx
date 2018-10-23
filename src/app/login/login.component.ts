import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  alert: string;
  loginPage: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.loginPage = false;
    // reset login status
    this.authenticationService.logout();
  }

  onSubmit() {
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    // TODO connect the authenticationService to validate the user
    localStorage.setItem('currentUser', JSON.stringify(
      {id: '', username: 'admin', firstName: 'FirstName', lastName: 'LastName', token: 'fake-jwt-token'}));

    this.router.navigate(['/']);
  }
}
