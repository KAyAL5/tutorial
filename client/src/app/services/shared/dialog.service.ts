import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';

import { IConfirmText } from '../../interfaces/confirmdiaog';

import { ConfirmDialogComponent } from '../../components/shared/dialog/confirm/confirm.component';
// import { from } from 'rxjs';

@Injectable()
export class DialogService {

  constructor(private dialog: MatDialog) { }

  showConfirmDiaog(text?:IConfirmText) {
    // const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    // dialogConfig.data = 'This text is passed into the dialog!';
    this.dialog.open(ConfirmDialogComponent, {
      width: '600px',
      data: text,
      disableClose: true
    });
  }
}
