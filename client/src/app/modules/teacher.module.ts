import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';
import { TeacherRoutingModule } from '../modules/teacher.routing.module';
import { DialogService } from '../services/shared/dialog.service';

import { ConfirmDialogComponent } from '../components/shared/dialog/confirm/confirm.component';

import { TeacherDashboardComponent } from '../components/teacher/teacherdashboard.component';
import { TeacherTimeTableComponent } from '../components/teacher/teachertimetable/teachertimetable.component';

@NgModule({
  imports: [
    CommonModule, FormsModule,
    MaterialModule, TeacherRoutingModule
  ],
  providers: [DialogService],  
  declarations: [TeacherDashboardComponent, TeacherTimeTableComponent,
    ConfirmDialogComponent],
  entryComponents: [
      ConfirmDialogComponent
    ],
})
export class TeacherModule { }