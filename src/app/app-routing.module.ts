import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateHeroComponent } from './create-hero/create-hero.component';
import { ShowherosComponent } from './showheros/showheros.component';
import { ShowAllHerosComponent } from './show-all-heros/show-all-heros.component';

const routes: Routes = [
  { path: '', component: CreateHeroComponent },
  { path: "CreateHero", component: CreateHeroComponent },
  { path: "ShowHeros", component: ShowAllHerosComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
