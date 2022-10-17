import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-proposal-listing',
  templateUrl: './proposal-listing.component.html',
  styleUrls: ['./proposal-listing.component.scss']
})
export class ProposalListingComponent implements OnInit {

  question = new FormControl;
  forums: any;
  proposals: any;

  constructor(private dialog: MatDialog, private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.initializer();
  }

  initializer(): void {
    this.api.getProposal().subscribe(res => this.proposals = res);
  }

  openProposal(id: any){
    this.router.navigateByUrl(`app/proposal/${id}`);
  }

  createProposal(){
     this.router.navigateByUrl('app/proposal/new');
  }

}
