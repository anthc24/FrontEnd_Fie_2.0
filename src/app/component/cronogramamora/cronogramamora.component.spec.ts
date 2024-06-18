import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CronogramamoraComponent } from './cronogramamora.component';

describe('CronogramamoraComponent', () => {
  let component: CronogramamoraComponent;
  let fixture: ComponentFixture<CronogramamoraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CronogramamoraComponent]
    });
    fixture = TestBed.createComponent(CronogramamoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
