import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Clase31Component } from './clase31.component';

describe('Clase31Component', () => {
  let component: Clase31Component;
  let fixture: ComponentFixture<Clase31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Clase31Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Clase31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
