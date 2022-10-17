import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AskQuestionComponent } from './ask-question/ask-question.component';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {

  forums: any;

  constructor(private dialog: MatDialog, private api: ApiService) { }

  ngOnInit(): void {
    this.initializer();
  }

  initializer(): void {
    this.api.getForums().subscribe((res: any) => {
      this.forums = res;
    });
  }

  askQuestion(): void {
    this.dialog.open(AskQuestionComponent, {
      width: '550px',
      autoFocus: false
    }).afterClosed().subscribe(() => {
      this.initializer();
    });
  }

  filterCategory(value: any){
    this.forums = [];
     this.api.filterForum(value).subscribe( res=> {
      this.forums = res;
     })
  }

}
