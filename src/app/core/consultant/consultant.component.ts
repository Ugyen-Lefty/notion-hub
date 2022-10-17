import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {AppoinmentModalComponent} from './appoinment-modal/appoinment-modal.component';

@Component({
  selector: 'app-consultant',
  templateUrl: './consultant.component.html',
  styleUrls: ['./consultant.component.scss']
})
export class ConsultantComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  consultant = [
    {
      name: 'Zimba Galey Wangchuk',
      work: 'Analyst',
      profile: './assets/images/zimba.svg',
    },
    {
      name: 'Vijay Gurung',
      work: 'Academian',
      profile: './assets/images/vijay.png',
    },
    {
      name: 'Kinley Tshering',
      work: 'Chief Project Manager',
      profile: './assets/images/KT.png',
    },
    {
      name: 'Sonam Dendup',
      work: 'Cheif Executive Officer',
      profile: './assets/images/SD.png',
    },
    {
      name: 'Sonam Dorji',
      work: 'Cheif Executive Officer',
      profile: './assets/images/SD1.png',
    }
  ]

  selectedName =  'Zimba Galey Wangchuk';
  selectedProfile = './assets/images/zimba.svg';
  selectedWork = 'Analyst';

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(AppoinmentModalComponent, {
      width: '600px',
      data: {
        animal: 'panda',
      },
    });
  }

  select(name: any, profile: any, work: any) {
    this.selectedName = name;
    this.selectedProfile = profile;
    this.selectedWork = work;
  }
}
