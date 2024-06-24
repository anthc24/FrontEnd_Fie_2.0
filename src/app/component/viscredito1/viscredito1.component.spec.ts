import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Viscredito1Component } from './viscredito1.component';

describe('Viscredito1Component', () => {
  let component: Viscredito1Component;
  let fixture: ComponentFixture<Viscredito1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Viscredito1Component]
    });
    fixture = TestBed.createComponent(Viscredito1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
