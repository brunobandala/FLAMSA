import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
 import { FormRouteComponent } from '../components/form-route.component';
 import { ReactiveFormsModule, FormsModule } from '@angular/forms';
 
@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule 
  ],
  declarations: [
    FormRouteComponent
  ],
  exports: [
    FormRouteComponent
  ],
  bootstrap: [ FormRouteComponent ]
})
export class FormRouteModule { }