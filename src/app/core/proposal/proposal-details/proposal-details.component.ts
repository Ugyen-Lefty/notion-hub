import { AppointmentModalComponent } from './appointment-modal/appointment-modal.component';
import { ApiService } from './../../api.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { AppoinmentModalComponent } from '../../consultant/appoinment-modal/appoinment-modal.component';

@Component({
  selector: 'app-proposal-details',
  templateUrl: './proposal-details.component.html',
  styleUrls: ['./proposal-details.component.scss']
})
export class ProposalDetailsComponent implements OnInit {

  isSelected = false;
  id: any;
  proposal: any;

  constructor(private route: ActivatedRoute, private api: ApiService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.route.params.subscribe((res: any) => {
      this.api.getProposalById(res?.id).subscribe(res => {
        this.proposal = res;
      });
    });
  }

  toggleSelected(data: any){
    this.isSelected = data;
  }

  appointment(){
    this.dialog.open(AppoinmentModalComponent, {
      width: '600px',
      autoFocus: false,
    }).afterClosed().subscribe(() => {
      // Swal.fire({
      //   title: 'Appointment made successfully!',
      //   timer: 1500,
      //   toast: true,
      //   showConfirmButton: false,
      //   icon: "success",
      //   position: 'top-end',
      // });
    });
  }

}
