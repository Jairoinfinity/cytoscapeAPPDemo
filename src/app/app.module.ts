import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { ModalLinkingFieldComponent } from './components/modal-linking-field/modal-linking-field.component';
import { FormsModule } from '@angular/forms';
import { ModalDataFieldComponent } from './components/modal-data-field/modal-data-field.component';
import { GraphQLModule } from './services/graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { SubmitOkComponent } from './components/submit-ok/submit-ok.component';
import { SubmitErrorComponent } from './components/submit-error/submit-error.component';
import { ModalUploadExcelComponent } from './components/modal-upload-excel/modal-upload-excel.component';
import { SubmitErrorDataComponent } from './components/submit-error-data/submit-error-data.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalLinkingFieldComponent,
    ModalDataFieldComponent,
    SubmitOkComponent,
    SubmitErrorComponent,
    ModalUploadExcelComponent,
    SubmitErrorDataComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    GraphQLModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ModalLinkingFieldComponent,
    ModalDataFieldComponent,
    SubmitOkComponent,
    SubmitErrorComponent,
    ModalUploadExcelComponent,
    SubmitErrorDataComponent
  ]

})
export class AppModule { }
