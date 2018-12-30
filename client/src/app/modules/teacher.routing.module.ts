import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeacherDashboardComponent } from '../components/teacher/teacherdashboard.component';
import { TeacherTimeTableComponent } from '../components/teacher/teachertimetable/teachertimetable.component';

const routes: Routes = [
  {
    path: '',
    component: TeacherDashboardComponent,
    children: [
      {
        path: '',
        component: TeacherTimeTableComponent
      }
    //   {
    //     path: 'Teacher/about',
    //     component: TeacherAboutComponent
    //   }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }