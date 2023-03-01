import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioReactivoIntermedioComponent } from './formulario-reactivo-intermedio.component';

describe('FormularioReactivoIntermedioComponent', () => {
  let component: FormularioReactivoIntermedioComponent;
  let fixture: ComponentFixture<FormularioReactivoIntermedioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioReactivoIntermedioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioReactivoIntermedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
