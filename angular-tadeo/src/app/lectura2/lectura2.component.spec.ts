import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lectura2Component } from './lectura2.component';

describe('Lectura2Component', () => {
  let component: Lectura2Component;
  let fixture: ComponentFixture<Lectura2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lectura2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lectura2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
