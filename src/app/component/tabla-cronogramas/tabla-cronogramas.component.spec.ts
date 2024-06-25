import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaCronogramasComponent } from './tabla-cronogramas.component';

describe('TablaCronogramasComponent', () => {
  let component: TablaCronogramasComponent;
  let fixture: ComponentFixture<TablaCronogramasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaCronogramasComponent]
    });
    fixture = TestBed.createComponent(TablaCronogramasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
