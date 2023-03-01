import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioReactivoAvanzadoComponent } from './formulario-reactivo-avanzado.component';

describe('FormularioReactivoAvanzadoComponent', () => {
  let component: FormularioReactivoAvanzadoComponent;
  let fixture: ComponentFixture<FormularioReactivoAvanzadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioReactivoAvanzadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioReactivoAvanzadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
