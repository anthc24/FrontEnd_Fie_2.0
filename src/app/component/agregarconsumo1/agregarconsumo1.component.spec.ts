import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Agregarconsumo1Component } from './agregarconsumo1.component';

describe('Agregarconsumo1Component', () => {
  let component: Agregarconsumo1Component;
  let fixture: ComponentFixture<Agregarconsumo1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Agregarconsumo1Component]
    });
    fixture = TestBed.createComponent(Agregarconsumo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
