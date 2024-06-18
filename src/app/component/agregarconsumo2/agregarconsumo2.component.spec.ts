import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Agregarconsumo2Component } from './agregarconsumo2.component';

describe('Agregarconsumo2Component', () => {
  let component: Agregarconsumo2Component;
  let fixture: ComponentFixture<Agregarconsumo2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Agregarconsumo2Component]
    });
    fixture = TestBed.createComponent(Agregarconsumo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
