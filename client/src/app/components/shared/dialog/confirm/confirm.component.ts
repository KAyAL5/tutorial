import { Component, OnInit, Inject } from '@angular/core';
// import { MdDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { IConfirmText } from '../../../../interfaces/confirmdiaog';

@Component({
  selector: 'app-my-dialog',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  
  text : IConfirmText;

  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: IConfirmText) {
    this.text =  data;
  }

  ngOnInit() {
  }

  onCloseConfirm() {
    this.dialogRef.close('Confirm');
  }

  onCloseCancel() {
    this.dialogRef.close('Cancel');
  }
}
