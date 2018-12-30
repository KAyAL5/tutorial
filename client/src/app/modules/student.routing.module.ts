import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentDashboardComponent } from '../components/student/studentdashboard.component';
import { StudentTimeTableComponent } from '../components/student/studenttimetable/studenttimetable.component';

const routes: Routes = [
  {
    path: '',
    component: StudentDashboardComponent,
    children: [
      {
        path: '',
        component: StudentTimeTableComponent
      }
    //   {
    //     path: 'Student/about',
    //     component: StudentAboutComponent
    //   }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }