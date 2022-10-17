import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-idea-tree',
  templateUrl: './idea-tree.component.html',
  styleUrls: ['./idea-tree.component.scss']
})
export class IdeaTreeComponent implements OnInit {

  id: any;
  forum: any;
  @Output() converted = new EventEmitter<any>();
  @Input() isConverted: any;

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.initializer();
  }

  initializer(){
    this.route.params.subscribe((res: any) => {
      this.api.getIdeaTree(res?.id).subscribe(res => {
        this.forum = res;
      });
    });
    this.id = this.route.snapshot.params['id'];
  }

  convert(){
    this.converted.emit(true);
  }

  proposalDetails(id: any){
    this.router.navigateByUrl(`app/idea-pool/${id}`);
    // window.location.reload();
    this.initializer();
  }

}
