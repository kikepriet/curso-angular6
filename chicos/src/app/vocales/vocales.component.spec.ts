import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VocalesComponent } from './vocales.component';

describe('VocalesComponent', () => {
  let component: VocalesComponent;
  let fixture: ComponentFixture<VocalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VocalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VocalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
