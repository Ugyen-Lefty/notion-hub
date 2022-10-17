import { ApiService } from 'src/app/core/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-idea-filter',
  templateUrl: './idea-filter.component.html',
  styleUrls: ['./idea-filter.component.scss']
})
export class IdeaFilterComponent implements OnInit {
  
  category = [
    {
      name: 'Education',
      count: 34,
      icon: 'https://asmpa.selise.cloud/1665411823_2402d723cf1118737f66cb8ba9cbd2_education.png'
    },
    {
      name: 'Information Technology',
      count: 5666,
      icon: 'https://asmpa.selise.cloud/1665412135_7362b375d606a07d134cf95e07a1cc_IT.png'
    },
    {
      name: 'Economics',
      count: 566,
      icon: 'https://asmpa.selise.cloud/1665412133_369ebd04f2154a4b3f72518b461306_economics.png'
    },
    {
      name: 'Health',
      count: 9000,
      icon: 'https://asmpa.selise.cloud/1665412134_79339e10d9323cd0527601f1c80571_health.png'
    },
    {
      name: 'Rural',
      count: 23243,
      icon: 'https://asmpa.selise.cloud/1665412134_71843a4502b11fe23c96f137676241_rural.png'
    },
    {
      name: 'Public Sector',
      count: 43534,
      icon: 'https://asmpa.selise.cloud/1665412132_bc04d091bc2cf976b98ddda353298b_foreign.png'
    },
    {
      name: 'Others',
      count: 34534,
      icon: 'https://asmpa.selise.cloud/1665412132_af5da5d1188adb7df49eb687d7e89b_others.png'
    }
  ];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getCategories(true).subscribe( (res: any) => {
      this.category = res;
  })
  }

}
