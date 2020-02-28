import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UploadExcelService } from '../../services/upload-excel.service';

@Component({
  selector: 'app-modal-upload-excel',
  templateUrl: './modal-upload-excel.component.html',
  styleUrls: ['./modal-upload-excel.component.css']
})
export class ModalUploadExcelComponent implements OnInit {
  public target: DataTransfer = null;

  constructor(
    public activeModal: NgbActiveModal,
    public uploadExcelService: UploadExcelService
  ) { }

  ngOnInit() {
  }

  onFileChange(evt: any){
    this.target = <DataTransfer>(evt.target);
  }

  uploadExcel(){
    this.uploadExcelService.changes(this.target);
    this.activeModal.dismiss('Cross click');
  }

}
