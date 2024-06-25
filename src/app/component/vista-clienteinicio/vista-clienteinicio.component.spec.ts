import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaClienteinicioComponent } from './vista-clienteinicio.component';

describe('VistaClienteinicioComponent', () => {
  let component: VistaClienteinicioComponent;
  let fixture: ComponentFixture<VistaClienteinicioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistaClienteinicioComponent]
    });
    fixture = TestBed.createComponent(VistaClienteinicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
