import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoCocheComponent } from './tipo-coche.component';

describe('TipoCocheComponent', () => {
  let component: TipoCocheComponent;
  let fixture: ComponentFixture<TipoCocheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoCocheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoCocheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
