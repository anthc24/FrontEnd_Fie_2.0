import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CronogramapagoComponent } from './cronogramapago.component';

describe('CronogramapagoComponent', () => {
  let component: CronogramapagoComponent;
  let fixture: ComponentFixture<CronogramapagoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CronogramapagoComponent]
    });
    fixture = TestBed.createComponent(CronogramapagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
