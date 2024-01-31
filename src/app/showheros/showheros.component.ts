import { Component, Input } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-showheros',
  templateUrl: './showheros.component.html',
  styleUrls: ['./showheros.component.css']
})
export class ShowherosComponent {


   @Input() showdelete=false;
   @Input() showupdate=false;
   @Input() title="";

  constructor(public shared: SharedService) {


  }



  Delete(heroname: string) {
    var deletedhero = this.shared.HeroList.find(h => h.name == heroname);
    this.shared.HeroList.splice(deletedhero, 1);
    this.shared.savelist();


  }


}
