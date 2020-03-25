import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitErrorComponent } from './submit-error.component';

describe('SubmitErrorComponent', () => {
  let component: SubmitErrorComponent;
  let fixture: ComponentFixture<SubmitErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
