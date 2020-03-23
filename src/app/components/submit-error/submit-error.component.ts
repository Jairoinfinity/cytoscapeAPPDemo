import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-submit-error',
  templateUrl: './submit-error.component.html',
  styleUrls: ['./submit-error.component.css']
})
export class SubmitErrorComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  close(){
      this.activeModal.dismiss('Cross click');
  }

}
