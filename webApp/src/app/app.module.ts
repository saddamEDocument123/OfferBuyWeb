import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import{HomeComponent}from'./Home/home.component';

import{CommonModule}from'@angular/common';
import{AppRoutingModule} from'./app.route';
import { AgmCoreModule } from '@agm/core';



@NgModule({
  declarations: [
    AppComponent,HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAxbvzHrsuVUVw9eb7qkalE6l_406T70Qc'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
