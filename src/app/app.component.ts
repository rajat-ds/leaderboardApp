import { Component,Inject ,OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddleaderComponent} from  './addleader/addleader.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent  {
 
   title = 'leaderBoard';
   arr1 = [];
   constructor(private matDialog: MatDialog,) {
   this.arr1.push({id:1,name:"rajat",points:23})
  }
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    // this.matDialog.open(AddleaderComponent, dialogConfig);
    let dialogRef = this.matDialog.open(AddleaderComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(value => {
      console.log(`Dialog sent: ${value}`); 
    });
  }
  
}
