import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  HeroList: any[] = [];
  constructor() {

    this.loadlist();

   }
  private listKey = 'HeroList';



  savelist() {
    localStorage.setItem(this.listKey, JSON.stringify(this.HeroList));
  }

  loadlist() {
    let storedList = localStorage.getItem(this.listKey);
    if (storedList == null) {
      this.HeroList = [];
    }
    else {
      this.HeroList = JSON.parse(storedList);
    }
  }


}
