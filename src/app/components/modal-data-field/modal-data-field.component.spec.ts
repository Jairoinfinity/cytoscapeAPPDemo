import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDataFieldComponent } from './modal-data-field.component';

describe('ModalDataFieldComponent', () => {
  let component: ModalDataFieldComponent;
  let fixture: ComponentFixture<ModalDataFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDataFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDataFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
