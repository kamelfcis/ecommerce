import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { CreateHeroComponent } from './create-hero/create-hero.component';
import { ShowherosComponent } from './showheros/showheros.component';
import { ShowAllHerosComponent } from './show-all-heros/show-all-heros.component';
import { SelectComponent } from './select/select.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateHeroComponent,
    ShowherosComponent,
    ShowAllHerosComponent,
    SelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
