import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitOkComponent } from './submit-ok.component';

describe('SubmitOkComponent', () => {
  let component: SubmitOkComponent;
  let fixture: ComponentFixture<SubmitOkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitOkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitOkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
