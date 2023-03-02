import { Component } from '@angular/core';

export interface Producto {
  Id: string;
  Maker: string;
  img: string;
  Url: string;
  Title: string;
  Description: string;
  Ratings: any[] | null;
}

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css'],
})
export class TareaComponent {
  
}
