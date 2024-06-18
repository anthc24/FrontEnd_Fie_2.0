import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisfinanzasComponent } from './misfinanzas.component';

describe('MisfinanzasComponent', () => {
  let component: MisfinanzasComponent;
  let fixture: ComponentFixture<MisfinanzasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MisfinanzasComponent]
    });
    fixture = TestBed.createComponent(MisfinanzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
