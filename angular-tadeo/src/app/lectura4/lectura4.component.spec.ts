import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lectura4Component } from './lectura4.component';

describe('Lectura4Component', () => {
  let component: Lectura4Component;
  let fixture: ComponentFixture<Lectura4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lectura4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lectura4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
