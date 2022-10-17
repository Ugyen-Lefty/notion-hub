import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  discussions: any = [];
  constructor(private api: ApiService, private route: Router) { }
  selected = '/#home';
  ngOnInit(): void {
    this.route.events.subscribe( (res: any) => {
      this.selected = res['url'];
    })
    this.api.webDiscussion().subscribe ((res: any) => {
       this.discussions = res;
    })
  }



}
