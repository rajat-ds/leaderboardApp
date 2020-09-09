import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { MatDialogRef } from "@angular/material/dialog";
@Component({
  selector: 'app-addleader',
  templateUrl: './addleader.component.html',
  styleUrls: ['./addleader.component.css']
})
export class AddleaderComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<AddleaderComponent>){}

  ngOnInit(): void {
  }
  close() {
    this.dialogRef.close("Thanks for using me!");
  }
}
