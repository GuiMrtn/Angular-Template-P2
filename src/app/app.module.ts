import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    //C'est ici qu'on déclare nos composants
    AppComponent
  ],
  imports: [
    //C'est ici qu'on importe les modules qui seront utilisés dans notre projet
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
