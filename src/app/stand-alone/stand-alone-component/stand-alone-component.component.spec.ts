import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandAloneComponentComponent } from './stand-alone-component.component';

describe('StandAloneComponentComponent', () => {
  let component: StandAloneComponentComponent;
  let fixture: ComponentFixture<StandAloneComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandAloneComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandAloneComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
