import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.scss']
})
export class ProposalComponent implements OnInit {

  proposals: any;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getProposal().subscribe(res => this.proposals = res);
  }

}
