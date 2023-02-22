import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Clase3Component } from './clase3/clase3.component';
import { Clase31Component } from './clase31/clase31.component';
import { Clase32Component } from './clase32/clase32.component';
import { Clase33Component } from './clase33/clase33.component';

@NgModule({
  declarations: [
    AppComponent,
    Clase3Component,
    Clase31Component,
    Clase32Component,
    Clase33Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
