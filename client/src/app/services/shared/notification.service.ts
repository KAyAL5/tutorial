import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class NotificationService {

    constructor(private matSnackBar: MatSnackBar, private zone: NgZone) { }
    notify(message: string) {
        this.zone.run(() => {
            this.matSnackBar.open(message, '', {
                duration: 2000
            });
        });
    }
}

// https://material.angular.io/components/snack-bar/overview
// Load the given component into the snack-bar.
// let snackBarRef = snackbar.openFromComponent(MessageArchivedComponent);
