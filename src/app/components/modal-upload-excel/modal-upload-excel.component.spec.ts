import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUploadExcelComponent } from './modal-upload-excel.component';

describe('ModalUploadExcelComponent', () => {
  let component: ModalUploadExcelComponent;
  let fixture: ComponentFixture<ModalUploadExcelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalUploadExcelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalUploadExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
