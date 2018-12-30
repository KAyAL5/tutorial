import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { NotificationService } from '../../services/shared/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  
  constructor(private router: Router,
    private snackBar: NotificationService) { 

    }

  ngOnInit() {
  }

  login(): void {
    if (this.username == 'admin' && this.password == 'admin') {
      this.router.navigate(["teacher"]);
    } else {
      this.snackBar.notify('Invalid Credentials !!!');
    }
  }
}
