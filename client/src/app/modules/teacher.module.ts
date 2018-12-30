import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';
import { TeacherRoutingModule } from '../modules/teacher.routing.module';

import { TeacherDashboardComponent } from '../components/teacher/teacherdashboard.component';
import { TeacherTimeTableComponent } from '../components/teacher/teachertimetable/teachertimetable.component';

@NgModule({
  imports: [
    CommonModule, FormsModule,
    MaterialModule, TeacherRoutingModule
  ],
  declarations: [TeacherDashboardComponent, TeacherTimeTableComponent]
})
export class TeacherModule { }