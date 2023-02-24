import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolacionComponent } from './clases/interpolacion/interpolacion.component';
import { EventosComponent } from './clases/binding/eventos/eventos.component';
import { PropiedadComponent } from './clases/binding/propiedad/propiedad.component';
import { AtributoComponent } from './clases/binding/atributo/atributo.component';
import { BindingComponent } from './clases/binding/binding.component';
import { TwoWayDataBindingComponent } from './clases/two-way-data-binding/two-way-data-binding.component';
import { FormsModule } from '@angular/forms';
import { DirectivasComponent } from './clases/directivas/directivas.component';
import { NgSwitchComponent } from './clases/directivas/estructurales/ng-switch/ng-switch.component';
import { NgStyleComponent } from './clases/directivas/atributos/ng-style/ng-style.component';
import { NgClassComponent } from './clases/directivas/atributos/ng-class/ng-class.component';
import { NgIfComponent } from './clases/directivas/estructurales/ng-if/ng-if.component';
import { NgForComponent } from './clases/directivas/estructurales/ng-for/ng-for.component';


@NgModule({
  declarations: [
    AppComponent,
    InterpolacionComponent,
    BindingComponent,
    EventosComponent,
    PropiedadComponent,
    AtributoComponent,
    TwoWayDataBindingComponent,
    DirectivasComponent,
    NgIfComponent,
    NgForComponent,
    NgSwitchComponent,
    NgStyleComponent,
    NgClassComponent
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
