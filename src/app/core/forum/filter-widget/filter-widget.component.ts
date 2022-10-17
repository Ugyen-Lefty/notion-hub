import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-filter-widget',
  templateUrl: './filter-widget.component.html',
  styleUrls: ['./filter-widget.component.scss']
})
export class FilterWidgetComponent implements OnInit {

  category: any = [];

  dzongkhags = [{
    name: 'Thimphu',
    icon: 'https://asmpa.selise.cloud/1665413917_9cdf9ffa24a9d54e98c92c4c421fe7_t.png'
  },
  {
    name: 'Bumthang',
    icon: 'https://asmpa.selise.cloud/1665413918_45b539e5226a8c80a67835709080c7_b.png'
  },
  {
    name: 'Punakha',
    icon: 'https://asmpa.selise.cloud/1665413917_908bd6106175fe32f52e6afdd9cde7_p.png'
  },
  {
    name: 'Chhukha',
    icon: 'https://asmpa.selise.cloud/1665413917_97fdba6dfc65a0df07c517000b4a29_c.png'
  },
  {
    name: 'Tashi Yangtse',
    icon: 'https://asmpa.selise.cloud/1665413917_9cdf9ffa24a9d54e98c92c4c421fe7_t.png'
  },
  {
    name: 'Trashigang',
    icon: 'https://asmpa.selise.cloud/1665413917_9cdf9ffa24a9d54e98c92c4c421fe7_t.png'
  },
  {
    name: 'Trongsa',
    icon: 'https://asmpa.selise.cloud/1665413917_9cdf9ffa24a9d54e98c92c4c421fe7_t.png'
  },
  {
    name: 'Tsirang',
    icon: 'https://asmpa.selise.cloud/1665413917_9cdf9ffa24a9d54e98c92c4c421fe7_t.png'
  },
  {
   name: 'Wangdue Phodrang',
   icon: 'https://asmpa.selise.cloud/1665413917_9cdf9ffa24a9d54e98c92c4c421fe7_t.png'
  },
{
  name: 'Dagana',
  icon: 'https://asmpa.selise.cloud/1665413917_97fdba6dfc65a0df07c517000b4a29_c.png'
},
{
  name: 'Gasa',
  icon: 'https://asmpa.selise.cloud/1665413917_97fdba6dfc65a0df07c517000b4a29_c.png'
},
{
  name: 'Haa',
  icon: 'https://asmpa.selise.cloud/1665413917_97fdba6dfc65a0df07c517000b4a29_c.png'
},
{
  name: 'Lhuentse',
  icon: 'https://asmpa.selise.cloud/1665413917_97fdba6dfc65a0df07c517000b4a29_c.png'
},
{
  name: 'Mongar',
  icon: 'https://asmpa.selise.cloud/1665413917_97fdba6dfc65a0df07c517000b4a29_c.png'
},
{
  name: 'Paro',
  icon: 'https://asmpa.selise.cloud/1665413917_97fdba6dfc65a0df07c517000b4a29_c.png'
},
{
  name: 'Pema Gatshel',
  icon: 'https://asmpa.selise.cloud/1665413917_97fdba6dfc65a0df07c517000b4a29_c.png'
},
{
  name: 'Samdrup Jongkhar',
  icon: 'https://asmpa.selise.cloud/1665413917_97fdba6dfc65a0df07c517000b4a29_c.png'
},
{
  name: 'Samtse',
  icon: 'https://asmpa.selise.cloud/1665413917_97fdba6dfc65a0df07c517000b4a29_c.png'
},
{
  name: 'Sarpang',
  icon: 'https://asmpa.selise.cloud/1665413917_97fdba6dfc65a0df07c517000b4a29_c.png'
},
{
  name: 'Zhemgang',
  icon: 'https://asmpa.selise.cloud/1665413917_97fdba6dfc65a0df07c517000b4a29_c.png'
},
];
isFeed = false;
 IdeaType = new FormControl();

@Output() filter = new EventEmitter<any>();
  constructor( private router: ActivatedRoute, private api: ApiService) { }

  ngOnInit(): void {
   this.isFeed =  !(this.router.snapshot as any)['_routerState'].url.includes('forum');
   this.api.getCategories(this.isFeed).subscribe( (res: any) => {
       this.category = res;
   })
  }

  filterFeeds(name: any, type: any) {
    this.filter.emit({name, type});
  }


}
