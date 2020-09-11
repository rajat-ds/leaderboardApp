import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { FormControl ,ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-addleader',
  templateUrl: './addleader.component.html',
  styleUrls: ['./addleader.component.css']
})
export class AddleaderComponent implements OnInit {
  user_name = new FormControl("rajat");
  points = new FormControl();
  constructor( public dialogRef: MatDialogRef<AddleaderComponent>){}

  ngOnInit(): void {
  }
 
  close(closedOption) {
    if(closedOption=="close")
    this.dialogRef.close(closedOption);
    else
    this.dialogRef.close({name:this.user_name.value,points:this.points.value});
  }
}
