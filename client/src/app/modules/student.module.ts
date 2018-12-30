import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StudentRoutingModule } from '../modules/Student.routing.module';

import { StudentDashboardComponent } from '../components/student/studentdashboard.component';
import { StudentTimeTableComponent } from '../components/student/studenttimetable/studenttimetable.component';

@NgModule({
  imports: [
    CommonModule, FormsModule,
    StudentRoutingModule
  ],
  declarations: [StudentDashboardComponent, StudentTimeTableComponent]
})
export class StudentModule { }