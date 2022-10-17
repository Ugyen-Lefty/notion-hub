import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchForm!: FormGroup;
  user: any;

  constructor(private fb: FormBuilder, private api: ApiService, private route: Router) { }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      search: ['']
    });
    this.api.getCurrentUser().subscribe(res => {
      this.user = res;
    });
  }

  signOut() {
   this.api.signOut().subscribe( ()=> {
       this.route.navigateByUrl('');
   } )
  }

  toProfile(){
    this.route.navigateByUrl('app/profile');
  }
}
