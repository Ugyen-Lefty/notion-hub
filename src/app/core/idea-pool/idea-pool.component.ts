import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-idea-pool',
  templateUrl: './idea-pool.component.html',
  styleUrls: ['./idea-pool.component.scss']
})
export class IdeaPoolComponent implements OnInit {

  constructor() { }
   value: any;
  ngOnInit(): void {
  }

  filterCategory(value: any){
    this.value = value;
  }

}
