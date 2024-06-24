import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViscreditoComponent } from './viscredito.component';

describe('ViscreditoComponent', () => {
  let component: ViscreditoComponent;
  let fixture: ComponentFixture<ViscreditoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViscreditoComponent]
    });
    fixture = TestBed.createComponent(ViscreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
