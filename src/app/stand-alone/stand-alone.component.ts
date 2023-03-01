import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-stand-alone',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './stand-alone.component.html',
  styleUrls: ['./stand-alone.component.css']
})
export default class StandAloneComponent {

}
