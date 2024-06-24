import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentacionesComponent } from './documentaciones.component';

describe('DocumentacionesComponent', () => {
  let component: DocumentacionesComponent;
  let fixture: ComponentFixture<DocumentacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentacionesComponent]
    });
    fixture = TestBed.createComponent(DocumentacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
