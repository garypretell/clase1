import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BTNTYPES } from './btn-types';

@Component({
  selector: 'app-dynamic-button',
  templateUrl: './dynamic-button.component.html',
  styleUrls: ['./dynamic-button.component.css']
})
export class DynamicButtonComponent {
@Input() title = '';
@Input() type: BTNTYPES = BTNTYPES.primary;
@Output() action = new EventEmitter();
}
