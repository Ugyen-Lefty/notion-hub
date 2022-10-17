import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { ApiService } from '../../api.service';
import { AskQuestionComponent } from '../ask-question/ask-question.component';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss']
})
export class FeedsComponent implements OnInit {

  question = new FormControl;
  forums: any;
  input!: string;
  selectedId !: string;
  comments!: any;
  currentUser: any;

  constructor(private dialog: MatDialog, private api: ApiService) { }

  @Input('forum') set forum(value: any) {
    this.forums = value;
    }

  ngOnInit(): void {
    this.initializer();
  }

  initializer(): void {
    this.api.getCurrentUser().subscribe((res) => {
      this.currentUser = res;
    });
    this.api.getForums().subscribe((res: any) => {
      this.forums = res;
    });
  }

  askQuestion(): void {
    this.dialog.open(AskQuestionComponent, {
      width: '800px',
      autoFocus: false,
      data: this.question.value
    }).afterClosed().subscribe(() => {
      this.initializer();
    });
  }

  isLikeColor(dislike: any, like: any) {
   return (like + dislike) > 0;
  }

  openComment(value: string){
    if(value === this.selectedId){
     this.selectedId = '';
    } else {
      this.selectedId = value;
    }
    this.getComments();
  }
  addComments(value: any, id: any){
     this.api.addComment(value, id).subscribe( () => {
       this.input = '';
       this.getComments();
     });
  }

  getComments(){
    this.api.getComments(this.selectedId).subscribe( res => {
       this.comments = res;
    })
  }

  likePost(id: any) {
    this.api.likePost(id).subscribe( () => {
      this.initializer();
    })
  }

  disLikePost(id: any) {
    this.api.disLikePost(id).subscribe( () => {
      this.initializer();
    })
  }

  deletePost(id: any){
    this.api.deletePost(id).subscribe(() => {
      Swal.fire('Question deleted Successfully', '', 'success').then(() => {
        this.initializer();
      });
    }, () => {
      Swal.fire('You are not authorized to delete other post', '', 'error');
    });
  }
}
