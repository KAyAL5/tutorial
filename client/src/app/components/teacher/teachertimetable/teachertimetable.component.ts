import { Component, OnInit } from '@angular/core';

import { IConfirmText } from '../../../interfaces/confirmdiaog';

import { DialogService } from '../../../services/shared/dialog.service';

@Component({
  selector: 'app-teachertimetable',
  templateUrl: './teachertimetable.component.html',
  styleUrls: ['./teachertimetable.component.css']
})
export class TeacherTimeTableComponent implements OnInit {

  constructor(private dialogSvc: DialogService) { }

  ngOnInit() {
  }

  confirm(){
    let data: IConfirmText;
    data = {
      title: 'Confiramation',
      body: 'Are You Sure To Delete The Item'
      };
    this.dialogSvc.showConfirmDiaog(data);
  } 

}
