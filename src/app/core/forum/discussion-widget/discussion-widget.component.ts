import { ApiService } from 'src/app/core/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discussion-widget',
  templateUrl: './discussion-widget.component.html',
  styleUrls: ['./discussion-widget.component.scss']
})
export class DiscussionWidgetComponent implements OnInit {

  discussion: any;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getPopularForums().subscribe(res => this.discussion = res);
  }

}
