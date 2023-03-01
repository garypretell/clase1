import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioReactivoBasicoComponent } from './formulario-reactivo-basico.component';

describe('FormularioReactivoBasicoComponent', () => {
  let component: FormularioReactivoBasicoComponent;
  let fixture: ComponentFixture<FormularioReactivoBasicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioReactivoBasicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioReactivoBasicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
