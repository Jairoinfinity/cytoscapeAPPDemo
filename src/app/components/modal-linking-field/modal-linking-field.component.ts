import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LinkingService } from '../../services/linkingservice.service';

@Component({
  selector: 'app-modal-linking-field',
  templateUrl: './modal-linking-field.component.html',
  styleUrls: ['./modal-linking-field.component.css']
})
export class ModalLinkingFieldComponent implements OnInit {
  linkingFieldText: string = null;

  

  constructor(
    public activeModal: NgbActiveModal,
    public linkingService: LinkingService
  ) { }

  ngOnInit() {
  }
  setLinkingField(){
    if(this.linkingFieldText != null && this.linkingFieldText != ""){
      this.linkingService.changes(this.linkingFieldText);
      this.activeModal.dismiss('Cross click');
    }
  }
}
