import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicButtonComponent } from './dynamic-button/dynamic-button.component';
import { DynamicModalComponent } from './dynamic-modal/dynamic-modal.component';


@NgModule({
  declarations: [
    DynamicButtonComponent,
    DynamicModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DynamicButtonComponent,
    DynamicModalComponent
  ]
})
export class SharedModule { }
