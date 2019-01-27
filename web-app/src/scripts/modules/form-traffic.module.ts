import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
 import { FormTrafficComponent } from '../components/form-traffic.component';
 import { ReactiveFormsModule, FormsModule } from '@angular/forms';
 
@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule 
  ],
  declarations: [
    FormTrafficComponent
  ],
  exports: [
    FormTrafficComponent
  ],
  bootstrap: [ FormTrafficComponent ]
})
export class FormTrafficModule { }