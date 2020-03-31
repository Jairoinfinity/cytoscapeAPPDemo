import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitErrorDataComponent } from './submit-error-data.component';

describe('SubmitErrorDataComponent', () => {
  let component: SubmitErrorDataComponent;
  let fixture: ComponentFixture<SubmitErrorDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitErrorDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitErrorDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
