import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dynamic-modal',
  templateUrl: './dynamic-modal.component.html',
  styleUrls: ['./dynamic-modal.component.css'],
})
export class DynamicModalComponent {
  @Input() title = '';
  isModalActive: boolean = false;

  toggleModal() {
    this.isModalActive = true;
  }
}
