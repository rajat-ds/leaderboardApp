import { Component,Inject  } from '@angular/core';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddleaderComponent} from  './addleader/addleader.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'leaderBoard';
  arr = [1,];
  constructor(private matDialog: MatDialog) {}

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    this.matDialog.open(AddleaderComponent, dialogConfig);
  }
}
