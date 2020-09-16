import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TadeoComponent } from './tadeo.component';

describe('TadeoComponent', () => {
  let component: TadeoComponent;
  let fixture: ComponentFixture<TadeoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TadeoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TadeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
