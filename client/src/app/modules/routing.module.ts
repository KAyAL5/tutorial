import {NgModule}  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from '../components/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path : '', component : LoginComponent},
  { path: 'teacher', loadChildren: './teacher.module#TeacherModule' },
  { path: 'student', loadChildren: './student.module#StudentModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }