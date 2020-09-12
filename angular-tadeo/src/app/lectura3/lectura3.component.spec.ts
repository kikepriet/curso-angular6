import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lectura3Component } from './lectura3.component';

describe('Lectura3Component', () => {
  let component: Lectura3Component;
  let fixture: ComponentFixture<Lectura3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lectura3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lectura3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
