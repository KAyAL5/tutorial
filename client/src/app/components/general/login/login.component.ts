import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { first } from 'rxjs/operators';

import { AuthService } from '../../../services/shared';

import { NotificationService } from '../../../services/shared/notification.service';

import { UserType } from '../../../services/shared/constants';

import { IUser } from '../../../interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup;
  invalidForm: boolean = false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authSvc: AuthService,
    private snackBar: NotificationService) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });

    // reset login status
    this.authSvc.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login = () => {
    this.invalidForm = this.loginForm.invalid;
    if (this.invalidForm) {
      return;
    }

    let user: IUser = {
      "email": this.loginForm.value.email,
      "password": this.loginForm.value.password
    };

    if (user.email !== '' && user.password !== '') {
      this.authSvc.authenticate(user).subscribe((result) => {
        if (result.data && result.data.isexist) {
          localStorage.setItem('currentUser', 'true');
          this.router.navigate(["teacher"]);
        }
        else {
          this.snackBar.notify('Invalid user');
        }
      }, (err) => {
        console.log(err);
      });
    }
    else {
      this.snackBar.notify('Please enter email and password');
    }
  }

  private validEmail() {
    return this.loginForm.get('email').hasError('required') ? 'Email is required' :
      this.loginForm.get('email').hasError('email') ? 'Not a valid email' : '';
  }

  validPassword() {
    return this.loginForm.get('password').hasError('required') ? 'Password is required' : '';
  }
}
