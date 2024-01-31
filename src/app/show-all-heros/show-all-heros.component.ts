import { Component } from '@angular/core';

@Component({
  selector: 'app-show-all-heros',
  templateUrl: './show-all-heros.component.html',
  styleUrls: ['./show-all-heros.component.css']
})
export class ShowAllHerosComponent {
  categories = [
    {id:1,name:'Goal Keeper'},
    {id:2,name:'Refree'},
    {id:3,name:'Defender'},
    {id:4,name:'Attacker'},
  ]
}
