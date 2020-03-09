import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { ModalLinkingFieldComponent } from './components/modal-linking-field/modal-linking-field.component';
import { FormsModule } from '@angular/forms';
import { ModalDataFieldComponent } from './components/modal-data-field/modal-data-field.component';
import { ModalUploadExcelComponent } from './components/modal-upload-excel/modal-upload-excel.component';
import { ModalNewParentComponent } from './components/modal-new-parent/modal-new-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalLinkingFieldComponent,
    ModalDataFieldComponent,
    ModalUploadExcelComponent,
    ModalNewParentComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ModalLinkingFieldComponent,
    ModalDataFieldComponent,
    ModalUploadExcelComponent,
    ModalNewParentComponent
  ]

})
export class AppModule { }
