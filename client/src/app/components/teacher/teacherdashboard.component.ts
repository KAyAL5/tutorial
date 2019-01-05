import { Component, OnInit } from '@angular/core';


import { AuthService } from '../../services/shared';
import { IUser } from 'src/app/interfaces/user';

@Component({
  selector: 'app-teacherdashboard',
  templateUrl: './teacherdashboard.component.html',
  styleUrls: ['./teacherdashboard.component.css']
})
export class TeacherDashboardComponent implements OnInit {

  users: IUser;

  constructor(private authSvc: AuthService) { }

  ngOnInit() {
  }

}
