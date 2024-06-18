import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevocliienteComponent } from './nuevocliiente.component';

describe('NuevocliienteComponent', () => {
  let component: NuevocliienteComponent;
  let fixture: ComponentFixture<NuevocliienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevocliienteComponent]
    });
    fixture = TestBed.createComponent(NuevocliienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
