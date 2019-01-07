import {NgModule}  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../guards';

import {LoginComponent, RegistrationComponent} from '../components/general';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent },
  { path : 'signin', component : RegistrationComponent},
  { path: 'teacher', canActivate: [AuthGuard], loadChildren: './teacher.module#TeacherModule' },
  { path: 'student', canActivate: [AuthGuard], loadChildren: './student.module#StudentModule' },
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
export class AppRoutingModule { }