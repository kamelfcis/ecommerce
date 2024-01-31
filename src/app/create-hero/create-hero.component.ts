import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-create-hero',
  templateUrl: './create-hero.component.html',
  styleUrls: ['./create-hero.component.css']
})
export class CreateHeroComponent {

  constructor(public s: SharedService) {

  }

  Genders=[{id:1,name:'Male'},{id:2,name:'Female'}];
  categories = [
    {id:1,name:'Goal Keeper'},
    {id:2,name:'Refree'},
    {id:3,name:'Defender'},
    {id:4,name:'Attacker'},
  ]

  hero = {
    name: '',
    power: 0,
    image: '',
    gender:'',
    category:''
  }

  OnCategoryChange(e:any)
  {
    console.log(e.target);
this.hero.category=e.target.value;
   
  }

  OnGenderChange(e:any)
  { 
    this.hero.gender=e.target.value;
  }
  CreateHero() {

    this.s.HeroList.push(this.hero);
    this.s.savelist();
    this.Clear();
    console.log(this.s.HeroList);
  }
  Clear() {
    this.hero = {
      name: '',
      power: 0,
      image: '',
      gender:'',
      category:''
    }
  }
}
