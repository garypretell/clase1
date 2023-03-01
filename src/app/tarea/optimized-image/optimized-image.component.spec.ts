import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptimizedImageComponent } from './optimized-image.component';

describe('OptimizedImageComponent', () => {
  let component: OptimizedImageComponent;
  let fixture: ComponentFixture<OptimizedImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptimizedImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptimizedImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
