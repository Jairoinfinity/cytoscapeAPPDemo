import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNewParentComponent } from './modal-new-parent.component';

describe('ModalNewParentComponent', () => {
  let component: ModalNewParentComponent;
  let fixture: ComponentFixture<ModalNewParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalNewParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalNewParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
