import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lectura1Component } from './lectura1.component';

describe('Lectura1Component', () => {
  let component: Lectura1Component;
  let fixture: ComponentFixture<Lectura1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lectura1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lectura1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
