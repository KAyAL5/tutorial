import {NgModule}  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from '../components/general';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path : '', component : LoginComponent},
  { path: 'teacher', loadChildren: './teacher.module#TeacherModule' },
  { path: 'student', loadChildren: './student.module#StudentModule' },
  { path: '404', component: LoginComponent},
  { path: '**', redirectTo: '/login'}
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