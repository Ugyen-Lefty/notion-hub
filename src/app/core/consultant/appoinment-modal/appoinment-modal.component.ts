import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-appoinment-modal',
  templateUrl: './appoinment-modal.component.html',
  styleUrls: ['./appoinment-modal.component.scss']
})
export class AppoinmentModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AppoinmentModalComponent>) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

}
