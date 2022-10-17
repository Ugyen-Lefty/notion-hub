import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-consent-modal',
  templateUrl: './consent-modal.component.html',
  styleUrls: ['./consent-modal.component.scss']
})
export class ConsentModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConsentModalComponent>, private api: ApiService, @Inject(MAT_DIALOG_DATA) public data: any) { }
   checked = false;
  ngOnInit(): void {
  }

  askPermission(){
 this.api.getConsent(this.data).subscribe( () => {
    this.dialogRef.close(true);
  });
  }

  cancel(){
    this.dialogRef.close(false);
  }

  isChecked(checked: any){
     this.checked = checked;
  }
}
