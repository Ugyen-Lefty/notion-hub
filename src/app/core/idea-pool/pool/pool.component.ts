import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { ConsentModalComponent } from '../consent-modal/consent-modal.component';
import { CreateIdeaComponent } from '../create-idea/create-idea.component';

@Component({
  selector: 'app-pool',
  templateUrl: './pool.component.html',
  styleUrls: ['./pool.component.scss']
})
export class PoolComponent implements OnInit {

  forums: any;
  input!: string;
  selectedId !: string;
  comments!: any;
  filters: any;
  currentUser: any;

  constructor(private dialog: MatDialog, private api: ApiService, private router: Router) { }
  @Input('filter') set filter(value: any) {
     this.filters = value;
     this.filterPost();
    }

  ngOnInit(): void {
    this.initializer();
  }

  initializer(){
    this.api.getForums().subscribe((res: any) => {
      this.forums = res;
    });
    this.api.getCurrentUser().subscribe(res => {
      this.currentUser = res;
    });
  }

  postIdea(): void {
    this.dialog.open(CreateIdeaComponent, {
      width: '800px',
      autoFocus: false,
    }).afterClosed().subscribe(() => {
      this.initializer();
    });
  }

  viewDetails(forum: any): void {
    if(forum.visibility === 'personal'){
      this.dialog.open(ConsentModalComponent, {
        width: '600px',
        autoFocus: false,
        data: forum.id
      }).afterClosed().subscribe( (res: any) => {
        res ? this.router.navigateByUrl(`app/idea-pool/${forum.id}`): '';
      });
    } else {
      this.router.navigateByUrl(`app/idea-pool/${forum.id}`);
    }
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

  isLikeColor(dislike: any, like: any) {
    return (like + dislike) > 0;
   }

   filterPost(){
    if(this.filters){
      this.api.filterForum(this.filters).subscribe( res=> {
        this.forums = res;
       })
    }
   }

   pullIdea(id: any): void {
    this.dialog.open(CreateIdeaComponent, {
      width: '800px',
      autoFocus: false,
      data: id
    }).afterClosed().subscribe(() => {
      this.initializer();
    });
  }

}
