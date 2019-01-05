import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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

  returnUrl: string;
  user: IUser = {
    email: '',
    password: ''
  };

  constructor(private router: Router,
    private route: ActivatedRoute,
    private authSvc: AuthService,
    private snackBar: NotificationService) {

  }

  ngOnInit() {
    localStorage.removeItem('currentUser');
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login(): void {

    if (this.user.email !== '' && this.user.password !== '') {
      this.authSvc.authenticate(this.user).subscribe((result) => {
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
}
