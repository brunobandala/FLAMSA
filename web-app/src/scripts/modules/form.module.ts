import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
 import { FormComponent } from '../components/form.component';
 import { ReactiveFormsModule, FormsModule } from '@angular/forms';
 
@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule 
  ],
  declarations: [
    FormComponent
  ],
  exports: [
    FormComponent
  ],
  bootstrap: [ FormComponent ]
})
export class FormModule { }