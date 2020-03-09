import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NewNodeService } from '../../services/new-node.service';

@Component({
  selector: 'app-modal-new-parent',
  templateUrl: './modal-new-parent.component.html',
  styleUrls: ['./modal-new-parent.component.css']
})
export class ModalNewParentComponent implements OnInit {

  nodeText: string = null;

  constructor(
    public activeModal: NgbActiveModal,
    public newNodeService: NewNodeService
  ) { }

  ngOnInit() {
  }
  setNode(){
    if(this.nodeText != null && this.nodeText != ""){
      this.newNodeService.changes(this.nodeText);
      this.activeModal.dismiss('Cross click');
    }
  }

}
