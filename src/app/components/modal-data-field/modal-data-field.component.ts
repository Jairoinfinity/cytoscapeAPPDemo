import { Component, OnInit } from '@angular/core';
import { DataFieldService } from '../../services/data-field.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-data-field',
  templateUrl: './modal-data-field.component.html',
  styleUrls: ['./modal-data-field.component.css']
})
export class ModalDataFieldComponent implements OnInit {
  public dataFieldText: string = null;

  constructor(
    public activeModal: NgbActiveModal,
    public dataFieldService: DataFieldService
  ) { }

  ngOnInit() {
  }

  setDataField(){
    if(this.dataFieldText != null && this.dataFieldText != ""){
      this.dataFieldService.changes(this.dataFieldText);
      this.activeModal.dismiss('Cross click');
    }
  }

}
