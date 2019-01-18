import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
 import { FormComponent } from '../components/form.component';
 
@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    FormComponent
  ],
  bootstrap: [ FormComponent ]
})
export class AppModule { }