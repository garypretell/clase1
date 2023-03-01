import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-optimized-image',
  templateUrl: './optimized-image.component.html',
  styleUrls: ['./optimized-image.component.css']
})
export class OptimizedImageComponent implements OnInit {
  constructor(private http: HttpClient) {}
  // products: any[] = [];
  products$!: Observable<any>;
  ngOnInit(): void {
    // this.http.get('https://api.escuelajs.co/api/v1/products')
    // .subscribe((data: any) => {
    //   this.products = data;
    // })
    this.products$ = this.http.get('https://api.escuelajs.co/api/v1/products');
  }
}
