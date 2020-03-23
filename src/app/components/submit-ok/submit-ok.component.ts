import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-submit-ok',
  templateUrl: './submit-ok.component.html',
  styleUrls: ['./submit-ok.component.css']
})
export class SubmitOkComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  close(){
      this.activeModal.dismiss('Cross click');
  }
}
