import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
 
import { AppComponent } from '../components/app.component';
import { FormModule } from './form.module';
 
@NgModule({
  imports: [
    BrowserModule,
    FormModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }