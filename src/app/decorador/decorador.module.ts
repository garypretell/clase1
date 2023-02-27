import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DecoradorRoutingModule } from './decorador-routing.module';
import { DecoradorComponent } from './decorador.component';
import { DecoradorInputComponent } from './decorador-input/decorador-input.component';
import { DecoradorOutputComponent } from './decorador-output/decorador-output.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DecoradorComponent,
    DecoradorInputComponent,
    DecoradorOutputComponent
    
  ],
  imports: [
    CommonModule,
    DecoradorRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export default class DecoradorModule { }
