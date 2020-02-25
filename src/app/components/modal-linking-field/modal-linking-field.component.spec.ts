import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLinkingFieldComponent } from './modal-linking-field.component';

describe('ModalLinkingFieldComponent', () => {
  let component: ModalLinkingFieldComponent;
  let fixture: ComponentFixture<ModalLinkingFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalLinkingFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalLinkingFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
