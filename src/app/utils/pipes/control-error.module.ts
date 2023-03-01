import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlErrorMessagePipe } from './control-error-message.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [ControlErrorMessagePipe],
  exports: [ControlErrorMessagePipe],
  providers: [],
})
export class ControlErrorModule {}
