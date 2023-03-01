import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlErrorModule } from 'src/app/utils/pipes/control-error.module';

@Component({
  selector: 'app-message-error',
  standalone: true,
  imports: [CommonModule, ControlErrorModule],
  templateUrl: './message-error.component.html',
  styleUrls: ['./message-error.component.css']
})
export class MessageErrorComponent {
  @Input() control!: any;
}
