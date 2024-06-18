import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Viscredito2Component } from './viscredito2.component';

describe('Viscredito2Component', () => {
  let component: Viscredito2Component;
  let fixture: ComponentFixture<Viscredito2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Viscredito2Component]
    });
    fixture = TestBed.createComponent(Viscredito2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
