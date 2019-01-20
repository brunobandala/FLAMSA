import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormClientComponent } from '../components/form-client.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    FormClientComponent
  ],
  exports: [
    FormClientComponent
  ],
  bootstrap: [FormClientComponent]
})
export class FormClientModule { }