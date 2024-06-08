import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniclienteComponent } from './inicliente.component';

describe('IniclienteComponent', () => {
  let component: IniclienteComponent;
  let fixture: ComponentFixture<IniclienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IniclienteComponent]
    });
    fixture = TestBed.createComponent(IniclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
