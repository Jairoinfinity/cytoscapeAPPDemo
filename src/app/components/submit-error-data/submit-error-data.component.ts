import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-submit-error-data',
  templateUrl: './submit-error-data.component.html',
  styleUrls: ['./submit-error-data.component.css']
})
export class SubmitErrorDataComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  close() {
    this.activeModal.dismiss('Cross click');
  }

}
