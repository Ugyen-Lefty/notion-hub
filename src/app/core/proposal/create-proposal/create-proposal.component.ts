import { Component, OnInit } from '@angular/core';
import { MatChip } from '@angular/material/chips';

@Component({
  selector: 'app-create-proposal',
  templateUrl: './create-proposal.component.html',
  styleUrls: ['./create-proposal.component.scss']
})
export class CreateProposalComponent implements OnInit {

  categories_list = ["Education", "Information Technology", "Economics", "Health", "Rural", "Public Sector", "Others"];

  constructor() { }

  ngOnInit(): void {
  }

  toggleSelection(chip: MatChip, value: string) {
    chip.toggleSelected();
  }
}
